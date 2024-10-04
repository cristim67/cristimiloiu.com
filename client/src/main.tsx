import {createRoot} from "react-dom/client";
import Home from "./views/Home.view.tsx";
import React from "react";
import "./assets/scss/main.scss";
import {PreloaderProvider} from "./components/PreloaderProvider.component.tsx";
import Preloader from "./components/Preloader.component.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <PreloaderProvider>
      <Preloader/>
      <Home/>
    </PreloaderProvider>
  </React.StrictMode>
);
