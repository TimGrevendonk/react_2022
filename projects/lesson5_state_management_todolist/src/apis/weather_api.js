import axios from 'axios';
import configData from "../config.json";

const weatherBaseUrl = configData.weatherapi + "api/weather";

class WeatherApi  {

    static getWeather(city) {
        return axios.get(weatherBaseUrl + "?type=forecast&city=" + city);
    }

    static getWeatherSlow(city) {
        return axios.get(weatherBaseUrl + "?type=slow&city=" + city);
    }

    static getWeatherError(city) {
        return axios.get(weatherBaseUrl + "?type=error&city=" + city);
    }

}

export default WeatherApi;
