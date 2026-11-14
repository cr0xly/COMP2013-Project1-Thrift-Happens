import type { ClothingProduct } from "../data/data";

export interface CheckoutCardProps {
  item: ClothingProduct;
  handleRemoveFromCheckout: (id: number) => void;
}

// Display a checkout product with its quantity, subtotal and remove button
export default function CheckoutCard({
  item,
  handleRemoveFromCheckout,
}: CheckoutCardProps) {
  return (
    <>
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.description} width="400" />
      <p>
        Price: ${item.price.toFixed(2)} - In Cart: {item.itemQuantity}
      </p>
      <p>Subtotal: ${(item.price * item.itemQuantity).toFixed(2)}</p>
      <button onClick={() => handleRemoveFromCheckout(item.id)}>Remove</button>
      <br />
    </>
  );
}
