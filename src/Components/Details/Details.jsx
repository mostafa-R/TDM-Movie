/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loadin from "../Movie/Loadin";

function Details() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const API_URL = "https://api.themoviedb.org/3";
  const API_HEADERS = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTczM2E5MGI1NmIxNGM3NGMwMDJiODJmOGY1MzYyZSIsIm5iZiI6MTczNjIxOTI2NS40MjEsInN1YiI6IjY3N2M5YTgxMTVjYWZlOGFhZDc0YTQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TKSE3Ew_t3ZGnVbgZ3VoDm3od8D993Kh6M3mLaAX6Xo",
  };

  const fetchMovie = async (id) => {
    try {
      const response = await axios.get(
        `${API_URL}/movie/${id}?language=en-US`,
        { headers: API_HEADERS }
      );
      const data = response.data;
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMovie(id);
    }
  }, [id]);

  console.log(movie);

  return (
    <>
      {Object.keys(movie).length === 0 && (
        <>
          <div className="dark:bg-gray-900 h-full">
            <Loadin />
            <Loadin />
            <Loadin />
          </div>
        </>
      )}

      {Object.keys(movie).length !== 0 && (
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 sm:mr-auto sm:ml-auto md:mr-auto md:ml-auto">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                {movie.title}
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {movie.overview}
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Watch Now
                </a>
              </div>
            </div>
            <div className="sm:mt-8 lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt="mockup"
                className="w-full max-h-[31rem]  rounded-lg sm:h-80 sm:w-3/4"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Details;
