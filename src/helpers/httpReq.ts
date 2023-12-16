import axios, { AxiosRequestConfig } from 'axios';
import { dev, env } from '.';



export default class HttpReq {
  http

  constructor() {

    this.http = axios.create({
      baseURL: dev ? env.VITE_DEV_API : env.VITE_API
    });

    this.http.defaults.withCredentials = true;
    this.http.interceptors.request.use(
      function (config) {
        // console.log('Axios configuration information', config)
        return config
      },
      function (error) {
        return error.response;
      }
    );

    // This intercepts response before it is returned
    // attached required parameters to the request
    this.http.interceptors.response.use(
      function (response) {
        // console.log('Axios configuration information', response)
        // let {  message,...data } = response.data;
        // console.log('SErver response from axios', data)
        
        return response.data;
      },
      function (error) {
        throw error.response.data
      }
    );
  }

  post = async (url: string, payload?: object, options?: AxiosRequestConfig) => await this.http.post(url, payload, options);

  patch = async (url: string, payload: object, options?: AxiosRequestConfig) => await this.http.patch(url, payload, options);

  get = async (url: string, options?: AxiosRequestConfig) => await this.http.get(url, options);

  delete = async (url: string) => await this.http.delete(url);
}