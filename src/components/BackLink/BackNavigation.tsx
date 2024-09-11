import { NavLink } from "react-router-dom";
import { paths } from "../../config/paths.ts";

export const BackNavigation = () => {
  return (
    <nav>
      <NavLink to={paths.katas}>👈 Volver a Katas</NavLink>
    </nav>
  );
};
