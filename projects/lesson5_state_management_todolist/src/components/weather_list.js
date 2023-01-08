import { useRecoilValue } from "recoil";
import { weatherForecastQuery } from "../store";

export default function WeatherList() {
  const weatherItems = useRecoilValue(weatherForecastQuery);

  return (
    <div>
      <ul>
        {weatherItems.map((item) => (
          <li key={item.dt_txt}>
            {item.dt_txt}:{item.main.temp} °C -{item.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
}
