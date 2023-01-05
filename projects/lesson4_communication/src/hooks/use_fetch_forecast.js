import { useEffect, useState } from 'react';
import WeatherApi from '../apis/weather_api';

export default function useFetchForecast (city) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

// put an async function inside the useEffect, the useEffect cannot be async.
  useEffect(() => {
    const fetchData = async () => {
    // enable loading when fetching data.
      setLoading(true);
      try {
        const result = await WeatherApi.getWeatherSlow(city);
        setItems(result.data.list);
      } catch (error) {
        console.log('Something went wrong with the weather api.');
      }
    // disable loading when fetching data is done.
      setLoading(false);
    }

    fetchData();
  }, [city]);

  return {
    items,
    loading,
  };
};
 