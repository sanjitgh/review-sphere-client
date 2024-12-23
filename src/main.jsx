import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import AuthProvaider from "./provaider/AuthProvaider.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import '@smastrom/react-rating/style.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvaider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvaider>
    </ThemeProvider>
  </StrictMode>
);
