import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "../features/hambergerSlice"

export const store = configureStore({
    reducer:{
        hamburger:hamburgerReducer
    }
})