import { configureStore } from '@reduxjs/toolkit';
import typeReducer from './typeSlice';
export const store = configureStore({
  reducer: {
    typeReducer: typeReducer,
  },
});
