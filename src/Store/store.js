import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./Slices/favorite";

export const store = configureStore({
  reducer: {
    favoriteList: favoriteReducer,
  },
});
