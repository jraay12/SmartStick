import axios from "axios";
import { useMutation, useQuery } from "react-query";

const baseUrl = "http://127.0.0.1:8000/api";

const facultyLogin = async (credentials) => {
  return await axios.post(`${baseUrl}/login`, credentials);
};

export const MutateLogin = () => {
  return useMutation(facultyLogin);
};

const contactDetails = async (userId) => {
  const token = sessionStorage.getItem("access_token");
  const validate = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/x-www-form-urlencode",
  };
  const value = await axios.get(`${baseUrl}/contacts-details/${userId}`, {
    headers: validate,
  });

  return value.data;
};

export const GetContactDetails = (userId) => {
  return useQuery(["details"], () => contactDetails(userId));
};

const userDetails = async () => {
  const token = sessionStorage.getItem("access_token");
  const validate = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/x-www-form-urlencode",
  };
  const value = await axios.get(`${baseUrl}/total-user`, {
    headers: validate,
  });

  return value.data;
};

export const UserDetails = () => {
  return useQuery(["user-details"], () => userDetails());
};

const userRegister = async (value) => {
  const token = sessionStorage.getItem("access_token");
  const validate = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/form-data",
  };

  return await axios.post(`${baseUrl}/create`, value, { headers: validate });
};

export const MutateUserRegiter = () => {
  return useMutation((value) => userRegister(value));
};
