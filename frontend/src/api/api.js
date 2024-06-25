// connection btw frontend and backend
import axios from "axios";

const API_BASE_URL = "http://localhost:****/abc"; // backend URL ( update with your own )

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
