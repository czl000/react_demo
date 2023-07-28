import * as React from 'react';
import './style.css';

interface LocationData {
  status: string;
  continent: string;
  country: string;
  countryCode: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  currency: string;
  isp: string;
  org: string;
  as: string;
  reverse: string;
  mobile: boolean;
  proxy: boolean;
  ip: string;
  cached: boolean;
}

export default function App() {
  const [data, setData] = React.useState<LocationData>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    fetch('https://api.techniknews.net/ipgeo/141.164.56.208a')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('数据请求失败！');
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(e);
      });
  }, []);
  return (
    <div>
      {!loading && data && !error && (
        <div>
          <p>IP地址：{data.ip}</p>
          {Object.entries(data).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>数据加载异常！</p>}
    </div>
  );
}
