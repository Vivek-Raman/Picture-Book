import { createHashRouter } from "react-router-dom";
import Layout from "@renderer/components/Layout";
import Dashboard from "@renderer/pages/Dashboard";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);
