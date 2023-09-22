import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";
import UserDetail from "./components/UserDetail/UserDetail";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";

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
      {
        path: "/user/:userID",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UserDetail></UserDetail>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId", // : disi karon 1,2,3 ashte pare
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
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
