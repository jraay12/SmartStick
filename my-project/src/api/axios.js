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

const addContact = async (value) => {
  const token = sessionStorage.getItem("access_token");
  const validate = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/form-data",
  };

  return await axios.post(`${baseUrl}/add-contacts`, value, {
    headers: validate,
  });
};

export const MutateContacts = () => {
  return useMutation((value) => addContact(value));
};

const deleteUser = async (id) => {
  const token = sessionStorage.getItem("access_token");
  const validate = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/form-data",
  };

  return await axios.delete(`${baseUrl}/delete/${id}`, { headers: validate });
};

export const MutateDelete = () => {
  return useMutation((id) => deleteUser(id));
};

const deleteContacts = async (id) => {
  const token = sessionStorage.getItem("access_token");
  const validate = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/form-data",
  };

  return await axios.delete(`${baseUrl}/delete-contacts/${id}`, {
    headers: validate,
  });
};

export const MutateDeleteContacts = () => {
  return useMutation((id) => deleteContacts(id));
};

const userContactDetails = async (id) => {
  const token = sessionStorage.getItem("access_token");
  const validate = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/form-data",
  };

  const value = await axios.get(`${baseUrl}/user-number/${id}`, {
    headers: validate,
  });
  return value.data;
};

export const GetUserContactDetails = (id) => {
  return useQuery(["userContactDetails"], () => userContactDetails(id));
};

//Edit contacts
const editContacts = async (value, id) => {
  const token = sessionStorage.getItem("access_token");
  const validate = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  return await axios.patch(`${baseUrl}/update-contacts/${id}`, value, {
    headers: validate,
  });
};


export const MutateEditContacts = () => {
  return useMutation(({value, id}) => editContacts(value, id))
}