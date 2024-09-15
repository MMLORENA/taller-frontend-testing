import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard/ProductCard.tsx";

describe("ProductCard ", () => {
  test("should show product name", () => {
    render(
      <ProductCard initialQuantity={4} stock={5} productName="Product name" />,
    );
    expect(screen.getByText("Product name")).toHaveTextContent("Product");
  });

  test("should show quantity 4 and stock 5", () => {
    const { getByText } = render(
      <ProductCard initialQuantity={4} stock={5} productName="Product" />,
    );
    expect(getByText("Quantity: 4")).toBeInTheDocument();
    expect(getByText("Stock available: 5")).toBeInTheDocument();
  });

  test("should show link to product detail", () => {
    render(
      <ProductCard initialQuantity={4} stock={5} productName="Product23456" />,
    );

    const link = screen.getByTestId("product-detail-link");
    expect(link).toHaveTextContent("Product Detail");
    expect(screen.getByText("Product Detail")).toHaveAttribute(
      "href",
      "/product/product23456",
    );
  });

  test("should show buttons Add and Remove", () => {
    const productName = "Product";
    const initialQuantity = 4;
    const stock = 5;

    render(
      <ProductCard
        initialQuantity={initialQuantity}
        stock={stock}
        productName={productName}
      />,
    );
    const buttonAddText = "Add";
    const addButton = screen.getByRole("button", { name: buttonAddText });
    const buttonRemoveText = "Remove";
    expect(addButton).toBeVisible();
    const removeButton = screen.getByRole("button", { name: buttonRemoveText });
    expect(removeButton).toBeVisible();
  });

  test("should show 'Sold Out' on empty stock", () => {
    render(<ProductCard initialQuantity={0} stock={0} productName="Product" />);
    screen.getByText("Sold Out");
  });

  test("should show Remove button disabled on 0 quantity", () => {
    render(<ProductCard initialQuantity={0} stock={5} productName="Product" />);
    const button: HTMLButtonElement = screen.getByText("Remove");
    expect(button).not.toBeNull();
    expect(button.disabled).toBe(true);
  });

  test("should show Add button disabled on empty stock", () => {
    render(<ProductCard initialQuantity={0} stock={0} productName="Product" />);
    const button = screen.queryByText("Add") as HTMLButtonElement;
    expect(button).not.toBeNull();
    expect(button.disabled).toBe(true);
  });
});
