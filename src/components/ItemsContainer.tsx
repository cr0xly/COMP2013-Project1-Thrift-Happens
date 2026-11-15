import type { ClothingProduct } from "../data/data";
import ItemCard from "./ItemCard";

export interface ItemsContainerProps {
  items: ClothingProduct[];
  handleAddToCheckout: (id: number, quantity: number) => void;
}

// Display each available product using an ItemCard component
export default function ItemsContainer({
  items,
  handleAddToCheckout,
}: ItemsContainerProps) {
  return (
    <div>
      <h2>Available Products</h2>
      <div className="items-grid">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            handleAddToCheckout={handleAddToCheckout}
          />
        ))}
      </div>
    </div>
  );
}
