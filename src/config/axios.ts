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
      const apiError = new Error(
        error.response.data?.Error || 'Error en la respuesta del servidor'
      );
      return Promise.reject(apiError);
    } else if (error.request) {
      return Promise.reject(new Error('No se pudo conectar con el servidor'));
    } else {
      return Promise.reject(new Error('Error en la configuración de la petición'));
    }
  }
);
