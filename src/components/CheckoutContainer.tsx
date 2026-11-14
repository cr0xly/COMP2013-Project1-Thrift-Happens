import type { ClothingProduct } from "../data/data";
import CheckoutCard from "./CheckoutCard";

export interface CheckoutContainerProps {
  checkout: ClothingProduct[];
  handleRemoveFromCheckout: (id: number) => void;
}

export default function CheckoutContainer({
  checkout,
  handleRemoveFromCheckout,
}: CheckoutContainerProps) {
  const checkoutTotal = checkout.reduce(
    (total, item) => total + item.price * item.itemQuantity,
    0,
  );
  return (
    <div>
      <h2>Checkout</h2>
      {checkout.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        checkout.map((item) => (
          <CheckoutCard
            key={item.id}
            item={item}
            handleRemoveFromCheckout={handleRemoveFromCheckout}
          />
        ))
      )}
      <br />
      {checkout.length > 0 && (
        <p>
          <b>Total: ${checkoutTotal.toFixed(2)}</b>
        </p>
      )}
      <br />
    </div>
  );
}
