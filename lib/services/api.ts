import axios, { AxiosInstance } from 'axios';
import apiConfig from '../config/apiConfig';

const getAxiosInstance = (): AxiosInstance => {
  const api = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  return api;
};

export default getAxiosInstance;
