import { createBrowserRouter, Navigate } from "react-router-dom";

import Container from "../layout/Container";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
    ],
  },
]);
