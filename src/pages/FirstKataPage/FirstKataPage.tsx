import { NavLink } from "react-router-dom";
import { paths } from "../../config/paths.ts";

export const FirstKataPage = () => {
  return (
    <>
      <NavLink to={paths.katas}>Volver a Katas</NavLink>
      <h2>Kata 1</h2>
    </>
  );
};
