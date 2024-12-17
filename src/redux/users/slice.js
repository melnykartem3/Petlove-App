import { createSlice } from '@reduxjs/toolkit';
import { signinUser, signoutUser, signupUser } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: {
      email: null,
      name: null,
      phone: null,
      avatar: null,
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, handlePending)
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signupUser.rejected, handleRejected)
      .addCase(signinUser.pending, handlePending)
      .addCase(signinUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signinUser.rejected, handleRejected)
      .addCase(signoutUser.pending, handlePending)
      .addCase(signoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = {
          email: null,
          name: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signoutUser.rejected, handleRejected);
  },
});

export default usersSlice.reducer;
