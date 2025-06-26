import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    list: [{ aasdas: "asdas" }],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.list.push(action.payload);
      console.log(state.list);
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
