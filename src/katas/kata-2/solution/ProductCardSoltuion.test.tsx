import { render, screen } from "@testing-library/react";
import { ProductCard } from "../../kata-1/ProductCard/ProductCard.tsx";
import { userEvent } from "@testing-library/user-event";

describe("Given a ProductCard component", () => {
  const productNameText = "Pulpo a la Gallega";
  const soldOutText = /Sold out/i;
  const addButtonText = /Add/i;

  describe("When it receives 'Pulpo a la Gallega', quantity 4 and stock 5 ", () => {
    const initialQuantity = 4;
    const stock = 5;

    test("Then user should see 'Pulpo a la Gallega' product name", () => {
      render(
        <ProductCard
          initialQuantity={initialQuantity}
          stock={stock}
          productName={productNameText}
        />,
      );

      const productName = screen.getByRole("heading", {
        name: productNameText,
      });

      expect(productName).toBeVisible();
    });

    test("Then the user should see quantity to 4 and stock to 5", () => {
      const quantityText = `Quantity: ${initialQuantity}`;
      const stockText = `Stock available: ${stock}`;

      render(
        <ProductCard
          initialQuantity={initialQuantity}
          stock={stock}
          productName={productNameText}
        />,
      );

      const expectedQuantity = screen.getByText(quantityText);
      const expectedStockText = screen.getByText(stockText);

      expect(expectedQuantity).toBeVisible();
      expect(expectedStockText).toBeVisible();
    });

    test("Then user should see a link to 'Detail Products'", () => {
      render(
        <ProductCard
          initialQuantity={initialQuantity}
          stock={stock}
          productName={productNameText}
        />,
      );

      const link = screen.getByRole("link", { name: /Product Detail/i });

      expect(link).toBeVisible();
    });

    test("Then user should see the buttons 'Add' and 'Remove'", () => {
      const productName = "Product";
      const buttonAddText = "Add";
      const buttonRemoveText = "Remove";
      const initialQuantity = 4;
      const stock = 5;

      render(
        <ProductCard
          initialQuantity={initialQuantity}
          stock={stock}
          productName={productName}
        />,
      );

      const addButton = screen.getByRole("button", { name: buttonAddText });
      const removeButton = screen.getByRole("button", {
        name: buttonRemoveText,
      });

      expect(addButton).toBeVisible();
      expect(removeButton).toBeVisible();
    });

    test("Then user should not see 'Sold Out'", () => {
      render(
        <ProductCard
          initialQuantity={initialQuantity}
          stock={stock}
          productName={productNameText}
        />,
      );

      const soldOut = screen.queryByText(soldOutText);

      expect(soldOut).not.toBeInTheDocument();
    });
  });

  describe("When it receives an empty stock", () => {
    const emptyStock = 0;

    test("Then user should see 'Sold Out'", () => {
      render(
        <ProductCard
          initialQuantity={0}
          stock={emptyStock}
          productName={productNameText}
        />,
      );

      const soldOut = screen.getByText(soldOutText);

      expect(soldOut).toBeVisible();
    });

    test("Then user should see a disabled 'Add' button", async () => {
      render(
        <ProductCard
          initialQuantity={0}
          stock={emptyStock}
          productName={productNameText}
        />,
      );

      const addButton = screen.getByRole("button", { name: addButtonText });

      expect(addButton).toBeDisabled();
    });
  });

  describe("When it receives 0 quantity", () => {
    const initialEmptyQuantity = 0;
    const stock = 5;

    test("Then user cannot click 'Reset' button", async () => {
      render(
        <ProductCard
          initialQuantity={initialEmptyQuantity}
          stock={stock}
          productName={productNameText}
        />,
      );

      const removeButton = screen.getByRole("button", { name: /Remove/i });

      expect(removeButton).toBeDisabled();
    });

    describe("And the user clicks on the 'Add' button", () => {
      test("Then the user should see the quantity increased by 1", async () => {
        const user = userEvent.setup();
        const quantityText = `Quantity: ${initialEmptyQuantity + 1}`;

        render(
          <ProductCard
            initialQuantity={initialEmptyQuantity}
            stock={stock}
            productName={productNameText}
          />,
        );

        const addButton = screen.getByRole("button", { name: addButtonText });

        await user.click(addButton);

        const quanity = screen.getByText(quantityText);

        expect(quanity).toBeVisible();
      });
    });
  });
});
