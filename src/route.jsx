import { createBrowserRouter } from "react-router-dom";
import Details from "./Components/Details/Details";
import Favorite from "./Components/Favorite/Favorite";
import Guard from "./Components/Guard/Guard";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MainComponent from "./Components/MainComponent/MainComponent";
import Movie from "./Components/Movie/Movie";

const route = createBrowserRouter([
  {
    path: "",
    element: <MainComponent />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/movies",
        element: <Movie />,
      },
      { path: "/details/:id", element: <Details /> },

      {
        path: "/favorite",
        element: (
          <Guard>
            <Favorite />
          </Guard>
        ),
      },

      { path: "/login", element: <Login /> },
    ],
  },
]);

export default route;
