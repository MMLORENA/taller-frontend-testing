import { render, screen } from "@testing-library/react";
import DropdownComponent from "../DropDown/DropDown.tsx";
import { userEvent } from "@testing-library/user-event";

describe("Given a DropdownComponent", () => {
  describe("When the user selects an option", () => {
    test("Then user should see only the button with the selected option", async () => {
      const user = userEvent.setup();
      const firstOption = "Option 1";
      const defaultButtonText = "Select an option";

      render(<DropdownComponent />);

      const button = screen.getByRole("button", { name: defaultButtonText });
      await user.click(button);

      const select = screen.getByRole("combobox");
      await user.selectOptions(select, [firstOption]);

      const selectedOption = screen.getByRole("button", {
        name: `Selected: ${firstOption}`,
      });

      const selectAfterSelectOption = screen.queryByRole("combobox");

      expect(selectedOption).toBeVisible();
      expect(selectAfterSelectOption).not.toBeInTheDocument();
    });
  });
});
