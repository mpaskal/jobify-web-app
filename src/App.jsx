import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>home</h1>,
  },
  {
    path: "/about",
    element: (
      <dib>
        <h1>about page</h1>
      </dib>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
