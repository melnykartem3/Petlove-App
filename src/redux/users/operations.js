import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const signupUser = createAsyncThunk(
  'users/signup',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const signinUser = createAsyncThunk(
  'users/signin',
  async (loginUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/signin', loginUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const signoutUser = createAsyncThunk(
  'users/signout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/signout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
