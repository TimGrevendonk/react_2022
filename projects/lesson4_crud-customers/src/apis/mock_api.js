import axios from 'axios';
import configData from "../config.json";

const baseUrl = configData.mockapi;

export default class MockApi {

  static get() {
    return axios.get(baseUrl);
  }
  
  static getbyid(id) {
    return axios.get(baseUrl + "/" + id);
  }

  static post(customer) {
    return axios.post(baseUrl, customer);
  }

  static put(customer) {
    return axios.put(baseUrl + "/" + customer.id, customer);
  }

  static delete(id)  {
    return axios.delete(baseUrl + "/" + id);
  }

}
