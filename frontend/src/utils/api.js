import axios from "axios";
import { base_url, config } from "./base_url";

export const checkuserSignup = async (data) => {
  const response = await axios.post(`${base_url}/user/check`, data, config);
  return response.data;
};

export const signupUser = async (data) => {
  const response = await axios.post(`${base_url}/user/register/`, data, config);
  return response.data;
};
export const verifyUserLogin = async (data) => {
    const response = await axios.post(`${base_url}/user/verify`, data, config);
    return response.data;
  };