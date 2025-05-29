import api from '@/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { listings: [], error: null, status: 'idle' };

const listingSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched listings to the array
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        if (axios.Cancel(action.payload)) {
          return;
        }

        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async (options) => {
    const response = await api.get('/api/listings', options);
    return response.data;
  },
);

export default listingSlice.reducer;
