import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../../services/usersService';

//Get all users

export const getAllUsers = createAsyncThunk(
  'users/getUsers',
  async (token, { rejectWithValue }) => {
    try {
      return await userService.getAllUsers(token);
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

//Update user
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (id, token, { rejectWithValue }) => {
    try {
      return await userService.updateUser(id, token);
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
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.users = null;
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = action.payload;
    },
    [updateUser.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.users = null;
    },
  },
});

export default usersSlice.reducer;
