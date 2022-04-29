import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

const getAll = async (page) => {
  const res = await axios.get(API_URL + `/products?page=${page}`);
  return res.data;
};

const productsService = {
  getAll,
};

export default productsService;
