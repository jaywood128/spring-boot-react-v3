import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/auth";

const register = (name, username, email, password) =>
  axios.post(`${BASE_API_URL}/signup`, {
    name,
    username,
    email,
    password,
  });

const login = (username, password) =>
  axios
    .post(`${BASE_API_URL}/signin`, {
      username,
      password,
    })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(`Response TOKEN: ${response.data.token}`);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("id", JSON.stringify(response.data.id));
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      return response.data;
    });

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => JSON.parse(localStorage.getItem("user"));

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
