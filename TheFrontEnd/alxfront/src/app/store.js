import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './api/apiSlice';
import { productsApiSlice } from '../features/products/productsApiSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware, productsApiSlice.middleware),
    devTools: true
});