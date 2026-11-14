import type { ClothingProduct } from "../data/data";

export interface ItemCardProps {
  item: ClothingProduct;
}

export default function ItemCard({ item }: ItemCardProps) {
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
      <br />
    </div>
  );
}
