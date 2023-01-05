import { useState, useEffect } from 'react';

import { CircleLoader } from 'react-spinners';

import WeatherItem from './weather_item';
// import WeatherApi from '../apis/weather_api';
import useFetchForecast from '../hooks/use_fetch_forecast';

function WeatherList() {
  const [city, setCity] = useState('Antwerp');
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true)

  var paddingStyle = {
    padding: 20
  };

  var buttonStyle = {
    borderRadius: 4,
    height: 50,
    border: 0,
    margin: 5,
    color: "#FFFFFF",
    backgroundColor: "#3388ff"
  }

  // put an async function inside the useEffect, the useEffect cannot be async.
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // enable loading when fetching data.
  //     setLoading(true);
  //     try {
  //       const result = await WeatherApi.getWeatherSlow(city);
  //       // console.log(result.data.list);
  //       setItems(result.data.list);
  //     } catch (error) {
  //       console.log('Something went wrong with the weather api kiddo.')
  //     }
  //     // disable loading when fetching data is done.
  //     setLoading(false);
  //   }
  //   fetchData();
  // },[city]);

  const {
    items,
    loading,
  } = useFetchForecast(city);

  // set all items in the array via map.
  const output = items.map((item, i) => {
    return (
      <div key={i} className="columns large-2 medium-4">
        <WeatherItem item={item} city={city} />
      </div>
    )
  });

  return (
    <section style={paddingStyle}>
      <div>
        <input style={buttonStyle} type="button" value="Antwerp" onClick={() => setCity('Antwerp')} />
        <input style={buttonStyle} type="button" value="Leuven" onClick={() => setCity('Leuven')} />
      </div>

      {loading && (
      <div className="center">
        <div className='sweet-loading'>
          <CircleLoader
            color={'#3399ff'}
            size={180}
            loading={true}
          />
        </div>
      </div>
      )}
      {!loading && (
        <div className="row">
          {output}
        </div>
      )}
    </section>
  );
}

export default WeatherList;