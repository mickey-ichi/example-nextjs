import axiosLibrary from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const axios = axiosLibrary.create({
  baseURL: `https://635a2a5538725a1746bf2903.mockapi.io/`,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${publicRuntimeConfig.token}`,
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default axios;
