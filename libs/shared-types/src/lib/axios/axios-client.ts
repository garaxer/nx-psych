import axios, { AxiosRequestConfig } from 'axios';

export const axiosBaseUrl = 'http://localhost:3333';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: axiosBaseUrl,
  timeout: 20000,
  responseType: 'json',
};

const axiosBackendClient = axios.create(axiosConfig);

export default axiosBackendClient;
