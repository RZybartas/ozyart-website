import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

//Register user
const register = async (userData) => {
  const res = await axios.post(API_URL + '/auth/register', userData);
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
};

//Login user
const login = async (userData) => {
  const res = await axios.post(API_URL + '/auth/login', userData);
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
};

//Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
