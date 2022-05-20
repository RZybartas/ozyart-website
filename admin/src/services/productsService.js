import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

//Getting all products from database

const getAllProducts = async () => {
  const res = await axios.get(API_URL + `/products`);
  return res.data;
};

//Getting product by id
const getProductById = async (id) => {
  const res = await axios.get(API_URL + `/products/${id}`);
  return res.data;
};

const productsService = {
  getAllProducts,
  getProductById,
};

export default productsService;
