import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listings: [],
  error: null,
  loading: 'idle',
};

const listingSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
});

export default listingSlice.reducer;
