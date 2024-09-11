import { BackNavigation } from "../../components/BackLink/BackNavigation.tsx";
import { KataHeader } from "../../components/KataHeader/KataHeader.tsx";
import DropdownComponent from "../../katas/kata-3/DropDown/DropDown.tsx";

export const ThirdKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={3}
        title="Diferencias entre userEvent vs fireEvent"
        instructionsPath="kata-3 → README.md"
      />
      <DropdownComponent />
    </>
  );
};
