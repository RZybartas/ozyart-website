import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsService from '../services/productsService';

const initialState = {
  products: [],
  currentPage: 1,
  numberOfPages: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

//Get all products
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (page, { rejectWithValue }) => {
    try {
      return await productsService.getAll(page);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.products = action.payload.data;
      state.numberOfPages = action.payload.numberOfPages;
      state.currentPage = action.payload.currentPage;
    },
    [getProducts.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isError = action.payload;
      state.products = null;
    },
  },
});

export default productsSlice.reducer;
