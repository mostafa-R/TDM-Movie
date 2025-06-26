import { useEffect, useState } from "react";

import { useRouteError } from "react-router-dom";
import instance from "../../Instance/instance.js";
import Loadin from "./Loadin";
import MovieCard from "./MovieCard.jsx";
import Pagination from "./Pagination";
import Search from "./Search";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async () => {
    try {
      const response = await instance.get("/movie/popular", {
        params: {
          language: "en-US",
          page,
        },
      });

      const data = response.data;

      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const search = () => {
    instance
      .get(`/search/movie?query=${searchTerm}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      search(searchTerm);
    } else {
      fetchMovies();
    }
  }, [searchTerm, page]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <div className="w-full block mt-5">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          search={search}
        />
      </div>

      <div className="dark:bg-gray-900 w-full h-full">
        {movies.length === 0 && (
          <>
            <Loadin />
            <Loadin />
            <Loadin />
          </>
        )}

        <div className=" flex flex-wrap  justify-center items-center gap-4">
          {movies.map((movie) => (
            <>
              <MovieCard key={movie.id} movie={movie} />
            </>
          ))}
        </div>
      </div>
      <Pagination nextPage={nextPage} prevPage={prevPage} page={page} />
    </>
  );
}

// export const loader = async () => {
//   const res = await instance.get("/movie/popular");
//   return res.data;
// };

export function ErrorFun() {
  const error = useRouteError();
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  );
}

export default Movie;
