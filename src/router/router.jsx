import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../shared/Layout";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import ProjectDetail2 from "../pages/ProjectDetail/ProjectDetail2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/급여-관리-시스템", element: <ProjectDetail /> },
      { path: "/리플레이", element: <ProjectDetail2 /> },
    ],
  },
]);

export default router;
