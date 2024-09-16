import { render, screen } from "@testing-library/react";
import { ProductCard } from "../kata-1/ProductCard/ProductCard.tsx";

describe("Given a ProductCard component", () => {
  const mockProductName = "Product";
  const soldOutText = /Sold out/i;

  describe("When it receives 'Product Name 1', quantity 4 and stock 5 ", () => {
    const initialQuantity = 4;
    const stock = 5;

    test("Then user should see 'Product name'", () => {
      render(
        <ProductCard
          initialQuantity={initialQuantity}
          stock={stock}
          productName={mockProductName}
        />,
      );

      const productName = screen.getByRole("heading", {
        name: "Product",
      });

      expect(productName).toBeVisible();
    });

    test("Then the user should see quantity to 4 and stock to 5", () => {
      const expectedQuantityText = `Quantity: ${initialQuantity}`;
      const expectedStockText = `Stock available: ${stock}`;

      render(
        <ProductCard
          initialQuantity={initialQuantity}
          stock={stock}
          productName={mockProductName}
        />,
      );

      const quantity = screen.getByText(expectedQuantityText);
      const stockText = screen.getByText(expectedStockText);

      expect(quantity).toBeVisible();
      expect(stockText).toBeVisible();
    });

    test("Then user should see a link to 'Detail Products'", () => {
      render(
        <ProductCard
          initialQuantity={initialQuantity}
          stock={stock}
          productName={mockProductName}
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
          productName={mockProductName}
        />,
      );

      const soldOut = screen.queryByText(soldOutText);

      expect(soldOut).not.toBeInTheDocument();
    });
  });

  describe("When stock is empty", () => {
    const emptyStock = 0;

    test("Then user should see 'Sold Out'", () => {
      render(
        <ProductCard
          initialQuantity={0}
          stock={emptyStock}
          productName={mockProductName}
        />,
      );

      const soldOut = screen.getByText(soldOutText);

      expect(soldOut).toBeVisible();
    });

    test("Then user should not click 'Add' button", async () => {
      render(
        <ProductCard
          initialQuantity={0}
          stock={emptyStock}
          productName={mockProductName}
        />,
      );

      const addButton = screen.getByRole("button", { name: /Add/i });

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
          productName={mockProductName}
        />,
      );

      const removeButton = screen.getByRole("button", { name: /Remove/i });

      expect(removeButton).toBeDisabled();
    });
  });
});
