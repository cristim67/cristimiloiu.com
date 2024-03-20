import {createRoot} from "react-dom/client";
import Home from "./views/Home.view.tsx";
import React from "react";
import "./assets/scss/main.scss";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
