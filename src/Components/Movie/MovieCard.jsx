// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StarIcon from "../Star/Star";
// import { addFavorite } from "../../Store/Slices/favorite";

function MovieCard({ movie }) {
 
  // const dispatch = useDispatch();
  // const favoriteMovies = useSelector((state) => state.favoriteList.list);

  // const addToFavorite = () => {
  //   const exists = favoriteMovies.find((m) => m.id === movie.id);
  //   if (!exists) {
  //     dispatch(addFavorite(movie));
  //   }
  // };
  return (
    <div
      className="mt-5 w-full max-w-72 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 "
          >
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
          <StarIcon
            className="text-slate-500 hover:text-yellow-600 cursor-pointer"
            // onClick={addToFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
