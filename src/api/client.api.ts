import axios from 'axios';
import { readToken } from '@app/services/localStorage.service';

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_API
});

API.interceptors.request.use((config) => {
    config.headers = {
      ...(config.headers ?? {}),
      Authorization: `Bearer ${readToken()}`,
    };
    return { ...config };
});
API.interceptors.response.use(response => response, async error => {
    const status = error.response ? error.response.status : null
    const originalConfig = error.config;
    // Access Token was expired
    return Promise.reject(error);
  }
);

export { API };