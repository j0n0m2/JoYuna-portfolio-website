import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../shared/Layout";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/급여-관리-시스템", element: <ProjectDetail /> },
    ],
  },
]);

export default router;
