import axios from 'axios';
import { apiBaseUrl } from './apiConfig';
import { authStore } from '../state/authStore';

export const http = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

http.interceptors.request.use((config) => {
  const token = authStore.getState().accessToken;
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      try {
        const refreshToken = authStore.getState().refreshToken;
        if (!refreshToken) throw new Error('no refresh token');
        const resp = await axios.post(`${apiBaseUrl}/auth/refresh`, { refreshToken });
        const newAccess = resp.data?.data?.accessToken ?? resp.data?.accessToken;
        const newRefresh = resp.data?.data?.refreshToken ?? resp.data?.refreshToken ?? refreshToken;
        if (newAccess) {
          authStore.getState().setTokens(newAccess, newRefresh);
          original.headers = original.headers ?? {};
          original.headers.Authorization = `Bearer ${newAccess}`;
          return http(original);
        }
      } catch (e) {
        authStore.getState().logout();
      }
    }
    return Promise.reject(error);
  },
);
