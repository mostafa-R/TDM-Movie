// import { createContext, useState } from "react";

// export const DataContext = createContext({});

// export const DataProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   function toggleTheme() {
//     console.log(theme);
//     setTheme(theme === "light" ? "dark" : "light");
//   }

//   return (
//     <DataContext.Provider
//       value={{
//         theme,
//         setTheme,
//         toggleTheme,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };


import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("color-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <DataContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DataContext.Provider>
  );
};
