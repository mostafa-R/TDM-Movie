import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../Store/Slices/favorite";
import { searchThunk, thunkdata } from "../../Store/Slices/fetchMovie.js";
import Loadin from "./Loadin";
import MovieCard from "./MovieCard.jsx";
import Pagination from "./Pagination";
import Search from "./Search";

function Movie() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorites.list);

  const handleToggle = (movie) => {
    const exists = favoriteMovies.some((fav) => fav.id === movie.id);
    if (exists) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  const movies = useSelector((state) => state.movies.movies);

  const dispatchMovies = useDispatch();

  const handleSearch = (searchTerm) => {
    dispatchMovies(searchThunk(searchTerm));
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      handleSearch(searchTerm);
    } else {
      dispatchMovies(thunkdata(page));
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
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className=" w-full h-full">
        {movies.length === 0 && (
          <>
            <Loadin />
            <Loadin />
            <Loadin />
          </>
        )}

        <div className=" flex flex-wrap  justify-center items-center gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleToggle={() => handleToggle(movie)}
              favoriteMovies={favoriteMovies}
            />
          ))}
        </div>
      </div>
      <Pagination nextPage={nextPage} prevPage={prevPage} page={page} />
    </>
  );
}

export default Movie;
