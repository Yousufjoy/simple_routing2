import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/about", element: <About></About> },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// 3ta kaj korte hobe
// 1)component banano
// 2)Kon route e gele etake dekhabe
// 3) Link diye click korle dekhabe eita banate hobe
