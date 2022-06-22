import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;
//Get all products
const getAll = async (page) => {
  const res = await axios.get(API_URL + `/products?page=${page}&limit=${12}`);
  return res.data;
};

//Getting product by id
const getProductById = async (id) => {
  const res = await axios.get(API_URL + `/products/${id}`);
  return res.data;
};

const productsService = {
  getAll,
  getProductById,
};

export default productsService;
