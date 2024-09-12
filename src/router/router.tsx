import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../components/App/App.tsx";
import { KatasPage } from "../pages/KatasPage/KatasPage.tsx";
import { paths } from "../config/paths.ts";
import { FirstKataPage } from "../pages/FirstKataPage/FirstKataPage.tsx";
import { SecondKataPage } from "../pages/SecondKataPage/SecondKataPage.tsx";
import { ThirdKataPage } from "../pages/ThirdKataPage/ThirdKataPage.tsx";
import { ForthKataPage } from "../pages/ForthKataPage/ForthKataPage.tsx";

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
      {
        path: paths.secondKata,
        element: <SecondKataPage />,
      },
      {
        path: paths.thirdKata,
        element: <ThirdKataPage />,
      },
      {
        path: paths.forthKata,
        element: <ForthKataPage />,
      },
      {
        path: "/product/*",
        element: <Navigate to={paths.firstKata} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
