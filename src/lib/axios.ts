import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export function setAuthToken(token: string) {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
}
