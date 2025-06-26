import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import route from "./route";
import { store } from "./Store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </>
  );
}

export default App;
