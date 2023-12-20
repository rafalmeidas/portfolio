import { createHashRouter, Navigate } from "react-router-dom";

import Container from "../layout/Container";
import Dev from "../components/Dev";
import About from "../pages/About";
import Home from "../pages/Home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "tech-stack", element: <Dev /> },
      { path: "projects", element: <Dev /> },
      { path: "contact", element: <Dev /> },
    ],
  },
]);
