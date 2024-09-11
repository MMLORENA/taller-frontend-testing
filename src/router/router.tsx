import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App/App.tsx";
import { KatasPage } from "../pages/KatasPage/KatasPage.tsx";

const paths = {
  root: "/",
  katas: "/katas",
};

export const router = createBrowserRouter([
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
]);
