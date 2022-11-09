import axios from "axios";
import { BASE_URL } from "./Constants/constants";

const instance = axios.create({
  baseURL: BASE_URL,
   withCredentials: true,
    timeout: 30000,
});

export default instance;


