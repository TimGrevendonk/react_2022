import WeatherList from "./weather_list";
import { Suspense } from "react";
import CityFilter from "./weather_filter";

export default function WeatherForecast() {
  return (
    <>
      <CityFilter />
      {/* Suspense sets another tag with content until its child component is loaded. */}
      <Suspense fallback={<div>Loading...</div>}>
        <WeatherList />
      </Suspense>
    </>
  );
}
