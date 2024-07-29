import axios from "axios";

// const BASE_URL =
//   "https://virtserver.swaggerhub.com/MAYALAPLAMEDI38/MaktabaLib/1/api";
const BASE_URL = "http://localhost:5000/api"

const defaultOptions = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const instance = axios.create(defaultOptions);

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
