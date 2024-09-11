import "./KatasPage.css";
import { NavLink } from "react-router-dom";
import { paths } from "../../config/paths.ts";

export const KatasPage = () => {
  return (
    <>
      <h1 className="main-title">
        <span>Bienvenidos/as al taller</span>
        <span>Frontend Testing: Consejos y Buenas Prácticas</span>
      </h1>
      <div className="images">
        <img
          src="/assets/pulpi-dereita-logo.png"
          alt="Logo Pulpo conf logo"
          width={128}
          height={128}
        />
        <img
          src="/assets/testing-library-logo.png"
          alt="Logo Testing Library"
          width={128}
          height={128}
        />
      </div>
      <ul className="links">
        <li>
          <NavLink to={paths.firstKata} className="link">
            Kata 1
          </NavLink>
        </li>
      </ul>
    </>
  );
};
