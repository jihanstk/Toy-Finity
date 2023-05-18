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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/update-toy/:id",
        element: (
          <PrivetRoute>
            <UpdateToy></UpdateToy>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5021/my-toys/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
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
