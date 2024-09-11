import { useDropdownComponent } from "./useDropdownComponent.ts";
import "./DropDown.css";

const DropdownComponent = () => {
  const { isOpen, selected, handleOnSelect, toggleDropdown } =
    useDropdownComponent();

  return (
    <form className="drop-down">
      <button
        className="drop-down__button"
        type="button"
        onClick={toggleDropdown}
        onFocus={() => console.log("Button focus")}
      >
        {selected ? `Selected: ${selected}` : "Select an option"}
      </button>
      {isOpen && (
        <select
          value={selected}
          onChange={handleOnSelect}
          className="drop-down__select"
        >
          <option value="">-- Choose an option --</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      )}
    </form>
  );
};

export default DropdownComponent;
