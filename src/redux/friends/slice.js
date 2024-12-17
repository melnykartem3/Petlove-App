import { createSlice } from '@reduxjs/toolkit';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => builder,
});

export default friendsSlice.reducer;
