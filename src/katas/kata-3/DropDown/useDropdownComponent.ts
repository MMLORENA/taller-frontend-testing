import { ChangeEvent, useState } from "react";

export const useDropdownComponent = () => {
  const [selected, setSelected] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    selected,
    handleOnSelect,
    toggleDropdown,
  };
};
