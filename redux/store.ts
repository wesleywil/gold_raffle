import { configureStore } from "@reduxjs/toolkit";
import rafflesReducer from "./raffles/raffles";
import raffleCellsReducer from "./raffle_cells/raffle_cells";
import utilsReducer from "./utils/utils";

export const store = configureStore({
    reducer:{
        raffles:rafflesReducer,
        raffle_cells:raffleCellsReducer,
        utils:utilsReducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;