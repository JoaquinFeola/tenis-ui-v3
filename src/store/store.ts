import { configureStore } from "@reduxjs/toolkit";
import { levelSlice } from "./slices/";

export const store = configureStore({
    reducer: {
        levels: levelSlice.reducer,
    }
}); 

