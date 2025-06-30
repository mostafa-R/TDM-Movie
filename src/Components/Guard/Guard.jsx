import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

function Guard({ children }) {
    const { isLogin } = useContext(LoginContext);
  const isAuth = isLogin
  

    if (isAuth) {
      return <Navigate to={"/login"} state={{ path: location.pathname }} />;
    }
    return children;
  };

export default Guard;
