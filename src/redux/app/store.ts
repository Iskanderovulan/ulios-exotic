import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api';
import { rootReducer } from './rootReducer'; // Import the rootReducer

export const store = configureStore({
  reducer: rootReducer, // Use the rootReducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.cocktailApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;