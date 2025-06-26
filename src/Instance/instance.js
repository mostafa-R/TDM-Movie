import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTczM2E5MGI1NmIxNGM3NGMwMDJiODJmOGY1MzYyZSIsIm5iZiI6MTczNjIxOTI2NS40MjEsInN1YiI6IjY3N2M5YTgxMTVjYWZlOGFhZDc0YTQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TKSE3Ew_t3ZGnVbgZ3VoDm3od8D993Kh6M3mLaAX6Xo",
  },
  params: {
    language: "en-US",
    page: 1,
  },
});

export default instance;
