import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Write from "../pages/Write";
import Single from "../pages/Single";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/login",
        element: <Login />,
        index: true,
      },
      {
        path: "/register",
        element: <Register />,
        index: true,
      },
      {
        path: "/post/:id",
        element: <Write />,
        index: true,
      },
      {
        path: "/single",
        element: <Single />,
        index: true,
      },
    ],
  },
]);
