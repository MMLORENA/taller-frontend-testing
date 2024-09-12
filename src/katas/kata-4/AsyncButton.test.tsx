import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import AsyncButton from "./AsyncButton/AsyncButton.tsx";

describe("Given an AsyncButton", () => {
  const buttonText = /Get data/i;
  const dataMessage = "Fetched Data";

  describe("When user clicks on the button", () => {
    test.only("Then user should see text 'Fetched Data' (❌ Fail Test)", async () => {
      render(<AsyncButton />);

      const button = screen.getByRole("button", { name: buttonText });

      await waitFor(async () => {
        await userEvent.click(button);
        expect(screen.getByText(dataMessage)).toBeVisible();
      });
    });

    test("Then user should see text 'Fetched Data' (Test using waitFor)", async () => {
      console.time("Query with waitFor");

      render(<AsyncButton />);

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText(dataMessage)).toBeVisible();
      });

      console.timeEnd("Query with waitFor");
    });

    test("Then user should see text 'Fetched Data' (Test using findBy)", async () => {
      console.time("Query with findBy");

      render(<AsyncButton />);

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      const text = await screen.findByText("Fetched Data");

      expect(text).toBeVisible();
      console.timeEnd("Query with findBy");
    });
  });
});
