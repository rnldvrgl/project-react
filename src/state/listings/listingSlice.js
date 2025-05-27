import api from '@/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { listings: [], error: null, loading: 'idle' };

const listingSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
});

export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async (options) => {
    const response = await api.get('/api/listings', options);
    return response.data;
  },
);

export default listingSlice.reducer;
