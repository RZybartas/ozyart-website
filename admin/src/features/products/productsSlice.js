import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsService from '../../services/productsService';

//Get all products
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      return await productsService.getAllProducts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsReset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.products = null;
    },
  },
});

export const { productsReset } = productsSlice.actions;
export default productsSlice.reducer;
