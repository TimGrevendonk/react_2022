import axios from "axios";
import configData from "../config.json";

const NYTBaseUrl = configData.nytapi;
const ApiKey = configData.apikey;

class NytApi {
  static getPosts(section) {
    return axios.get(NYTBaseUrl + section + ".json?api-key=" + ApiKey);
  }
}

export default NytApi;
