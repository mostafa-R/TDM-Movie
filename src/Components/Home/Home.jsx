import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../Store/Slices/favorite";

function Home() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favoriteList.list);

  const addToFavorite = () => {
   dispatch(addFavorite());
  };
  return (
    <div>
      <button onClick={addToFavorite}>dsdasdasdasd</button>
    </div>
  );
}

export default Home
