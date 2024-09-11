import { render, screen } from "@testing-library/react";
import App from "./App.tsx";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then user should see a welcome title", () => {
      const titleText =
        /Bienvenidos\/as al taller Frontend Testing: Consejos y Buenas Prácticas/i;

      render(<App />);

      const title = screen.getByRole("heading", {
        name: titleText,
      });

      expect(title).toBeVisible();
    });
  });
});
