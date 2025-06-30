import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { LoginProvider } from "./Components/Context/LoginContext.jsx";
import { DataProvider } from "./Components/Context/themContext";
import "./index.css";
import { store } from "./Store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DataProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </DataProvider>
    </Provider>
  </StrictMode>
);
