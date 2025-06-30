import { RouterProvider } from "react-router-dom";
import route from "./route";

function App() {

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-800">
        <RouterProvider router={route} />
      </div>
    </>
  );
}

export default App;
