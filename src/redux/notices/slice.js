import { createSlice } from '@reduxjs/toolkit';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
  },
});

export default noticesSlice.reducer;
