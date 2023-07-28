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
  React.useEffect(() => {
    fetch('https://api.techniknews.net/ipgeo/141.164.56.208')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch();
  }, []);
  return (
    <div>
      {data && (
        <div>
          <p>IP地址：{data.ip}</p>
          {Object.entries(data).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}