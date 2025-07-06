import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

if (!API_KEY) {
  console.warn(
    '⚠️ Clave API de OMDB no encontrada. Por favor, agrega VITE_OMDB_API_KEY a tu archivo .env'
  );
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Error de API:', error.response.data);
    } else if (error.request) {
      console.error('Error de red:', error.message);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);
