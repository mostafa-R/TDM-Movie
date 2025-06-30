import { createContext, useState } from "react";

export const LoginContext = createContext({});

export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(true);

  function toggleLogin(e) {
    e.preventDefault();
    setIsLogin((prev) => !prev);
    console.log(isLogin);
  }

  return (
    <LoginContext.Provider value={{ toggleLogin, isLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
