import { configureStore } from "@reduxjs/toolkit";
import rafflesReducer from "./raffles/raffles";


export const store = configureStore({
    reducer:{
        raffles:rafflesReducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;