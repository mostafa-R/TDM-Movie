import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../Instance/instance.js";

export const thunkdata = createAsyncThunk("fetchMovie", async (page) => {
  const response = await instance.get("/movie/popular", {
    params: {
      language: "en-US",
      page,
    },
  });

  return response.data;
});

export const searchThunk = createAsyncThunk(
  "searchMovie",
  async (searchTerm) => {
    const response = await instance.get(`/search/movie`, {
      params: {
        query: searchTerm,
        language: "en-US",
      },
    });

    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunkdata.fulfilled, (state, action) => {
        state.movies = action.payload.results;
      })
      .addCase(searchThunk.fulfilled, (state, action) => {
        state.movies = action.payload.results;
      });
  },
});

export default movieSlice.reducer;

