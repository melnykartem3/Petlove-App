import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
});

export default newsSlice.reducer;
