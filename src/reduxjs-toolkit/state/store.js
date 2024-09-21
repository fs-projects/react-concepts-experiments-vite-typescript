import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
export const toolkitStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})