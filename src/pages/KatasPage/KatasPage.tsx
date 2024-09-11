import { NavLink } from "react-router-dom";
import { paths } from "../../config/paths.ts";

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
        </ul>
      </nav>
    </>
  );
};
