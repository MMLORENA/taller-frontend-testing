import { ProductCard } from "../../katas/kata-1/ProductCard/ProductCard.tsx";
import { BackNavigation } from "../../components/BackLink/BackNavigation.tsx";
import { KataHeader } from "../../components/KataHeader/KataHeader.tsx";

export const FirstKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={1}
        title="Utiliza las queries apropiadas de Testing Library y los matchers de jest-dom"
        instructionsPath="kata-1 → README.md"
      />
      <ProductCard
        initialQuantity={1}
        stock={2}
        productName="Pulpo a la gallega"
      />
    </>
  );
};
