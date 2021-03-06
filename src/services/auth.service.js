import axios from "axios";

const API_URL = "http://ahtsolution.com";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
      'x-api-key': 'api-authorization-key'
  }
});

const register = (username, email, password) => {
  return axiosClient.post("/signup", {
    username,
    email,
    password,
  });
};

const login = async (username, password) => {
  const response = await axiosClient
    .post("/v1/user/login", {
      username,
      password,
    });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const saveFormBuilder = async (data) => {
  const response = await axios.post("https://react-form-builder-2022-default-rtdb.asia-southeast1.firebasedatabase.app/form_builder.json", {
      data: data
    });
  return response.data;
};

const getListFormData = async (data) => {
  const response = await axios.get("https://react-form-builder-2022-default-rtdb.asia-southeast1.firebasedatabase.app/form_builder.json");
  return response.data;
};

export default {
  register,
  login,
  logout,
  saveFormBuilder,
  getListFormData
};
