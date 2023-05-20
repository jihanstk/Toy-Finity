import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./LayOuts/Main/Main";
import Home from "./components/Home/Home/Home";
import AddAToy from "./components/AddAToy/AddAToy";
import Register from "./components/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import Login from "./components/Login/Login";
import MyToys from "./components/MyToys/MyToys";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import UpdateToy from "./components/MyToys/MyToyRow/UpdateToy/UpdateToy";
import AllToys from "./components/AllToys/AllToys";
import SingleToyDetails from "./components/SingleToyDetails/SingleToyDetails";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-toys",
        element: (
          <PrivetRoute>
            <MyToys></MyToys>
          </PrivetRoute>
        ),
      },
      {
        path: "/add-toy",
        element: (
          <PrivetRoute>
            <AddAToy></AddAToy>
          </PrivetRoute>
        ),
      },
      {
        path: "/details-toy/:id",
        element: (
          <PrivetRoute>
            <SingleToyDetails></SingleToyDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-finity-server.vercel.app/all-toys/${params.id}`),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/update-toy/:id",
        element: (
          <PrivetRoute>
            <UpdateToy></UpdateToy>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-finity-server.vercel.app/my-toys/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
