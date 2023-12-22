import React from "react";
import ReactDOM from "react-dom/client";

import RouteProvider from "./routes/RoutesProvider";

import "./styles/index.css";

import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouteProvider />
  </React.StrictMode>,
);
