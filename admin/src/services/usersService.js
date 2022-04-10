import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

//Get all users
const getAllUsers = async () => {
  const res = await axios.get(API_URL + '/users');

  return res.data;
};

//Update user
const updateUser = async (id, token) => {
  const res = await axios.put(API_URL + `/users/${id}`, {
    method: 'GET',
    headers: { authorization: `Bearer ${token}` },
  });
  return res.data;
};

const userService = {
  getAllUsers,
  updateUser,
};

export default userService;
