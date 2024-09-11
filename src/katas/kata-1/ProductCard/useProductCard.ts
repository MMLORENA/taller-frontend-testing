import { useState } from "react";
import { ProductCardProps } from "./ProductCard.tsx";

export const useProductCard = ({
  initialQuantity,
  stock,
}: Omit<ProductCardProps, "productName">) => {
  const [selectedQuantity, setSelectedQuantity] = useState(initialQuantity);
  const isOutOfStock = selectedQuantity >= stock;
  const isMoreQuantity = selectedQuantity <= 0;

  const handleOnAdd = () => {
    setSelectedQuantity((currentQuantity) => currentQuantity + 1);
  };

  const handleOnRemove = () =>
    setSelectedQuantity((currentQuantity) => currentQuantity - 1);

  return {
    selectedQuantity,
    isOutOfStock,
    isMoreQuantity,
    handleOnAdd,
    handleOnRemove,
  };
};
