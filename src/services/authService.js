import axios from "axios";

const API_URL = "http://ec2-54-158-43-40.compute-1.amazonaws.com:30082/back1/auth";

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/sign`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
