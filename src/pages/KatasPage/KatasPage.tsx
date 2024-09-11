import { NavLink } from "react-router-dom";
import { paths } from "../../config/paths.ts";
import "./KatasPage.css";

export const KatasPage = () => {
  return (
    <>
      <h2>Listado de Katas: </h2>
      <nav>
        <ul className="links">
          <li>
            <NavLink to={paths.firstKata} className="link">
              Kata 1
            </NavLink>
          </li>
          <li>
            <NavLink to={paths.secondKata} className="link">
              Kata 2
            </NavLink>
          </li>
          <li>
            <NavLink to={paths.thirdKata} className="link">
              Kata 3
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
