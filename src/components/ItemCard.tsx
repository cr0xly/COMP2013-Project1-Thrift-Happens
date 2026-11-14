import type { ClothingProduct } from "../data/data";
import { useState } from "react";

export interface ItemCardProps {
  item: ClothingProduct;
}

export default function ItemCard({ item }: ItemCardProps) {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);

  const handleIncreaseQuantity = () => {
    if (selectedQuantity < item.quantity) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (selectedQuantity > 0) {
      setSelectedQuantity(selectedQuantity - 1);
    }
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
      <p>Stock: {item.quantity}</p>
      <p>{item.description}</p>
      <span>
        Selected Quantity: <button onClick={handleDecreaseQuantity}>-</button>{" "}
        {selectedQuantity} <button onClick={handleIncreaseQuantity}>+</button>
      </span>
      <br />
      <br />
    </div>
  );
}
