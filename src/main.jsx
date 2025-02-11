import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import AuthProvaider from "./provaider/AuthProvaider.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { DarkModeProvaider } from "./DarkModeProvaider/DarkModeProvaider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvaider>
        <DarkModeProvaider>
          <RouterProvider router={Router}></RouterProvider>
        </DarkModeProvaider>
      </AuthProvaider>
    </ThemeProvider>
  </StrictMode>
);
