import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../App/App.tsx";
import { KatasPage } from "../pages/KatasPage/KatasPage.tsx";
import { paths } from "../config/paths.ts";

const routes: RouteObject[] = [
  {
    path: paths.root,
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to={paths.katas} />,
      },
      {
        path: paths.katas,
        element: <KatasPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
