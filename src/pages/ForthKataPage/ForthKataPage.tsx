import { BackNavigation } from "../../components/BackLink/BackNavigation.tsx";
import { KataHeader } from "../../components/KataHeader/KataHeader.tsx";

export const ForthKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={4}
        title="Métodos asíncronos"
        instructionsPath="kata-4 → README.md"
      />
    </>
  );
};
