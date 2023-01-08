import { useRecoilState, useRecoilRefresher_UNSTABLE } from "recoil";
import { cityState, weatherForecastQuery } from "../store";
import { useEffect } from "react";

export default function CityFilter() {
  const [city, setCity] = useRecoilState(cityState);
  const clearCache = useRecoilRefresher_UNSTABLE(weatherForecastQuery);

  useEffect(() => {
    clearCache();
  });

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <p>
      Filter:
      <select value={city} onChange={updateCity}>
        <option value="Antwerp">Antwerp</option>
        <option value="Leuven">Leuven</option>
      </select>
    </p>
  );
}
