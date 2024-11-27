import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainMenu from "./components/mainMenu.jsx";
import Shop from "./components/Shop.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./components/CategoryPage.jsx";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainMenu />,
      },
      {
        path: "/Shop/:productName",
        element: <CategoryPage />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
