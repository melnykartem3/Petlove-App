import { createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => builder,
});

export default citiesSlice.reducer;
