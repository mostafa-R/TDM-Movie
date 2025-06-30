import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    list: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.list.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.list.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
   
  },
});

export const { addFavorite, removeFavorite, favoritLength } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
