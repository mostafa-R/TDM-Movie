import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function MainComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainComponent;
