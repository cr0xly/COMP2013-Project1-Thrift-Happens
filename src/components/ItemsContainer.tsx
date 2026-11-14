import type { ClothingProduct } from "../data/data";
import ItemCard from "./ItemCard";

export interface ItemsContainerProps {
  items: ClothingProduct[];
  handleAddToCheckout: (id: number, quantity: number) => void;
}

export default function ItemsContainer({
  items,
  handleAddToCheckout,
}: ItemsContainerProps) {
  return (
    <div>
      <h2>Available Products</h2>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          handleAddToCheckout={handleAddToCheckout}
        />
      ))}
    </div>
  );
}
