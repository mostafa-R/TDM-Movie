import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../Store/Slices/favorite";
import MovieCard from "../Movie/MovieCard";

function Favorite() {
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

  return (
    <div>
      <h1 className="text-center text-3xl text-slate-300 mt-2 mb-5">
        {favoriteMovies.length === 0 ? "No Favorites" : "Favorites Movies"}
      </h1>
      <ul className="flex flex-wrap gap-5 justify-center items-center ">
        {favoriteMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            handleToggle={() => handleToggle(movie)}
            favoriteMovies={favoriteMovies}
          />
        ))}
      </ul>
    </div>
  );
}

export default Favorite;
