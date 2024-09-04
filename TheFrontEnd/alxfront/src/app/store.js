import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './api/apiSlice';
import { productsApiSlice } from '../features/products/productsApiSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware, productsApiSlice.middleware),
    devTools: true
})