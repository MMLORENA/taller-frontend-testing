import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../App/App.tsx";
import { KatasPage } from "../pages/KatasPage/KatasPage.tsx";
import { paths } from "../config/paths.ts";
import { FirstKataPage } from "../pages/FirstKataPage/FirstKataPage.tsx";

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
      {
        path: paths.firstKata,
        element: <FirstKataPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
