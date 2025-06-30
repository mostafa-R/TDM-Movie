import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./Slices/favorite.js";
import fetchMovie from "./Slices/fetchMovie.js";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    movies: fetchMovie,
  },
});
