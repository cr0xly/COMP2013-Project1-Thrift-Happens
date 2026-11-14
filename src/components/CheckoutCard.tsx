import type { ClothingProduct } from "../data/data";

export interface CheckoutCardProps {
  item: ClothingProduct;
}

export default function CheckoutCard({ item }: CheckoutCardProps) {
  return (
    <>
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.description} width="400" />
      <p>
        Price: ${item.price.toFixed(2)} - In Cart: {item.itemQuantity}
      </p>
      <p>Subtotal: ${(item.price * item.itemQuantity).toFixed(2)}</p>
    </>
  );
}
