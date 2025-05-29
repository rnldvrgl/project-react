import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './listings/listingSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});
