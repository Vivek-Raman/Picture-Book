import { createHashRouter } from "react-router-dom";
import Layout from "@renderer/components/Layout";
import Home from "@renderer/pages/Home";
import About from "@renderer/pages/About";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
