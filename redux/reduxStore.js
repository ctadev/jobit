import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";

const store = configureStore({
    apiSlice: apiSlice,
})