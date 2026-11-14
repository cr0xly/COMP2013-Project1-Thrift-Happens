import type { ClothingProduct } from "../data/data";
import { useState } from "react";

export interface ItemCardProps {
  item: ClothingProduct;
  handleAddToCheckout: (id: number, quantity: number) => void;
}

export default function ItemCard({ item, handleAddToCheckout }: ItemCardProps) {
  // Track how many of this product the user wants to add
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);

  // Increase the selected quantity without going over available stock
  const handleIncreaseQuantity = () => {
    if (selectedQuantity < item.quantity) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };

  // Decrease the selected quantity without going below zero
  const handleDecreaseQuantity = () => {
    if (selectedQuantity > 0) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  // Add the selected amount to checkout and reset the counter
  const handleAddButtonClick = () => {
    handleAddToCheckout(item.id, selectedQuantity);
    setSelectedQuantity(0);
  };

  return (
    <div>
      <p>
        <b>{item.name}</b>
      </p>
      <img src={item.image} alt={item.description} width={400} />
      <p> Size: {item.size}</p>
      <p>
        {item.color} {item.category} for {item.fit}
      </p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>Stock: {item.quantity === 0 ? "Out of Stock" : item.quantity}</p>
      <p>{item.description}</p>
      <p>
        Selected Quantity:{" "}
        <button
          onClick={handleDecreaseQuantity}
          disabled={selectedQuantity === 0}
        >
          -
        </button>{" "}
        {selectedQuantity}{" "}
        <button
          onClick={handleIncreaseQuantity}
          disabled={selectedQuantity >= item.quantity}
        >
          +
        </button>
      </p>
      <button onClick={handleAddButtonClick} disabled={selectedQuantity === 0}>
        Add to Checkout
      </button>
      <br />
      <br />
    </div>
  );
}
