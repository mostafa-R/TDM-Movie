import { Link } from "react-router-dom";
import StarIcon from "../Star/Star";

function MovieCard({ movie, handleToggle, favoriteMovies }) {
  return (
    <div className="w-full max-w-72 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-110 cursor-pointer overflow-hidden">
      <Link to={`/details/${movie.id}`}>
        <img
          className="p-1 rounded-t-lg h-80 w-full"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-3">
        <span className="text-cyan-400 text-xs font-medium title-font ">
          {movie.vote_average} / 10
        </span>

        <Link to={`/details/${movie.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </Link>
        <div className="flex items-center mt-2 justify-between ">
          <p className="leading-relaxed text-base  text-gray-500 ">
            {movie.release_date}
          </p>
          <button
            onClick={() => {
              handleToggle(movie);
            }}
          >
            <StarIcon
              className={`text-slate-500 hover:text-yellow-600 cursor-pointer ${
                favoriteMovies.some((fav) => fav.id === movie.id)
                  ? "text-yellow-600"
                  : "text-slate-500"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
