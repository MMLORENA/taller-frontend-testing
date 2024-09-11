import "./ProductCard.css";
import { useProductCard } from "./useProductCard.ts";

export type ProductCardProps = {
  initialQuantity: number;
  stock: number;
  productName: string;
};

export const ProductCard = ({
  productName,
  initialQuantity,
  stock,
}: ProductCardProps) => {
  const {
    isMoreQuantity,
    selectedQuantity,
    isOutOfStock,
    handleOnRemove,
    handleOnAdd,
  } = useProductCard({
    initialQuantity,
    stock,
  });

  return (
    <article className="product-card">
      <a
        data-testid="product-detail-link"
        href={`/product/${productName.toLowerCase()}`}
        className="product-card__link"
      >
        Product Detail
      </a>
      <h2 className="product-card__title">{productName}</h2>
      {isOutOfStock && <span className="product-card__sold-out">Sold Out</span>}
      <ul className="product-card__details">
        <li className="product-card__details-item">Stock available: {stock}</li>
        <li className="product-card__details-item">
          Quantity: {selectedQuantity}
        </li>
      </ul>
      <div className="product-card__buttons">
        <button onClick={handleOnRemove} disabled={isMoreQuantity}>
          Remove
        </button>
        <button onClick={handleOnAdd} disabled={isOutOfStock}>
          Add
        </button>
      </div>
    </article>
  );
};
