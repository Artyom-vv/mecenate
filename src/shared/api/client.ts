import axios from 'axios';
import * as Crypto from 'expo-crypto';

const USER_UUID = Crypto.randomUUID();
const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${USER_UUID}`;
  return config;
});
