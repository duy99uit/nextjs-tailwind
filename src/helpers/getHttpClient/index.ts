import axios from "axios";
export const HTTP_HEADER_VALUE = {
  APPLICATION_JSON: "application/json",
};
// const BASE_API = 'http://192.168.1.24:3000';
export interface ResponsePayloadInterface<T = any> {
  code: number;
  message: string;
  payload: T;
}
export const httpClient = axios.create({
  timeout: 3000,
  baseURL: "https://doric-be.herokuapp.com/",
  headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "content-type": "application/json",
  },
});

httpClient.interceptors.response.use(
  (resp) => {
    if (resp && resp) {
      return resp;
    }
    return resp;
  },
  (error) => {
    throw error;
  }
);
export default httpClient;