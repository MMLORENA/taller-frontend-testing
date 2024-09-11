import { ProductCard } from "../../katas/kata-1/ProductCard/ProductCard.tsx";
import { BackNavigation } from "../../components/BackLink/BackNavigation.tsx";
import { KataHeader } from "../../components/KataHeader/KataHeader.tsx";

export const SecondKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={2}
        title="Interacción del usuario"
        instructionsPath="kata-2 → README.md"
      />
      <ProductCard
        initialQuantity={1}
        stock={2}
        productName="Pulpo a la gallega"
      />
    </>
  );
};
