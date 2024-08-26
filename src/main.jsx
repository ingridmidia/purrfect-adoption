import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import AdoptionGuide from "./components/AdoptionGuide.jsx";
import Resources from "./components/Resources.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/adoption-guide",
        element: <AdoptionGuide />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);