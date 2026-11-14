import type { ClothingProduct } from "../data/data";
import ItemCard from "./ItemCard";

export interface ItemsContainerProps {
  items: ClothingProduct[];
}

export default function ItemsContainer({ items }: ItemsContainerProps) {
  return (
    <div>
      <h2>Available Products</h2>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
