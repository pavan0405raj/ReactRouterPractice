import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Componets/Home.jsx";
import About from "./Componets/About.jsx";
import Contact from "./Componets/Contact.jsx";
import User from "./Componets/user.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "user/:id", // Define a dynamic route
        element: <User/>, // Render the UserProfile component
      },
      {
        path: "/user", // Define a dynamic route
        element: <User/>, // Render the UserProfile component
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
f