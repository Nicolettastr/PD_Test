import axios from "axios";
import { API } from "../constants/api";

const axiosClient = axios.create({
  baseURL: API.ITUNES_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
