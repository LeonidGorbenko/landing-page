import { createHashRouter, RouterProvider, HashRouter } from "react-router";
import Layout from "./components/layout/index.jsx";
import Home from "./Pages/Home.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
