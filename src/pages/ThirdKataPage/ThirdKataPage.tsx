import { BackNavigation } from "../../components/BackLink/BackNavigation.tsx";
import { KataHeader } from "../../components/KataHeader/KataHeader.tsx";

export const ThirdKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={3}
        title="Diferencia entre userEvent vs fireEvent"
        instructionsPath="kata-3 → README.md"
      />
    </>
  );
};
