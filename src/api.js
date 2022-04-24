import axios from "axios";

export async function login(data) {
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, data);
}

export async function signup(data) {
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, data);
}

export async function createTeam(token, data) {
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/create-team`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
}

export async function joinTeam(token, data) {
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/join-team`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
}
