import { createBrowserRouter } from "react-router-dom";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MainComponent from "./Components/MainComponent/MainComponent";
import Movie, { ErrorFun } from "./Components/Movie/Movie";
import Favorite from "./Components/Favorite/Favorite";

const route = createBrowserRouter([
  {
    path: "",
    element: <MainComponent />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/movies",
        element: <Movie />,
        // loader: loader,
        errorElement: <ErrorFun />,
      },
      { path: "/details/:id", element: <Details /> },
      { path: "/favorite", element: <Favorite /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default route;
