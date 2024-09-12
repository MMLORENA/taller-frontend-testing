import { BackNavigation } from "../../components/BackLink/BackNavigation.tsx";
import { KataHeader } from "../../components/KataHeader/KataHeader.tsx";
import AsyncButton from "../../katas/kata-4/AsyncButton/AsyncButton.tsx";
import "./AsyncButton.css";

export const ForthKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={4}
        title="Métodos asíncronos"
        instructionsPath="kata-4 → README.md"
      />
      <AsyncButton />
    </>
  );
};
