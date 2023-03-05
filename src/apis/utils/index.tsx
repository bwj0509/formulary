import axios from "axios";

const BASE_URL = "https://ergast.com/api/f1/";

const axiosApi = (url, options?) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
