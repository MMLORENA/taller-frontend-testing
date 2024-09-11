import { ProductCard } from "../../katas/kata-1/ProductCard/ProductCard.tsx";
import { BackNavigation } from "../../components/BackLink/BackNavigation.tsx";
import "./FirstKataPage.css";

export const FirstKataPage = () => {
  return (
    <>
      <BackNavigation />
      <header className="header">
        <h2>
          Kata 1: Utiliza las queries apropiadas de Testing Library y los
          matchers de jest-dom
        </h2>
        <span>
          ℹ️ Encontrarás el enunciado de la kata en:{" "}
          <span className="italic">📂 src → katas → kata-1 → README.md</span>
        </span>
      </header>
      <hr className="divider"></hr>
      <ProductCard
        initialQuantity={1}
        stock={2}
        productName="Pulpo a la gallega"
      />
    </>
  );
};
