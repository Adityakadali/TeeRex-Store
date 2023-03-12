import App from "./App";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import CartContext from "./context/StoreContext";
import CartPage from "./routes/CartPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContext>
      <RouterProvider router={router} />
    </CartContext>
  </React.StrictMode>
);
