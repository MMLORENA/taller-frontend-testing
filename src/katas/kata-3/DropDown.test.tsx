import { render, screen, fireEvent } from "@testing-library/react";
import DropdownComponent from "./DropDown/DropDown.tsx";

describe("Given a DropdownComponent", () => {
  describe("When the user selects an option", () => {
    test("Then user should see only the button with the selected option", () => {
      const firstOption = "Option 1";
      const defaultButtonText = "Select an option";

      render(<DropdownComponent />);

      const button = screen.getByRole("button", { name: defaultButtonText });
      fireEvent.click(button);

      const select = screen.getByRole("combobox");
      fireEvent.change(select, { target: { value: firstOption } });

      const selectedOption = screen.getByRole("button", {
        name: `Selected: ${firstOption}`,
      });

      const selectAfterSelectOption = screen.queryByRole("combobox");

      expect(selectedOption).toBeVisible();
      expect(selectAfterSelectOption).not.toBeInTheDocument();
    });
  });
});
