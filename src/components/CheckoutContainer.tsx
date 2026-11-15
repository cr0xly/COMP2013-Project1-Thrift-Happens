import type { ClothingProduct } from "../data/data";
import CheckoutCard from "./CheckoutCard";

export interface CheckoutContainerProps {
  checkout: ClothingProduct[];
  handleRemoveFromCheckout: (id: number) => void;
  handleEmptyCheckout: () => void;
}

export default function CheckoutContainer({
  checkout,
  handleRemoveFromCheckout,
  handleEmptyCheckout,
}: CheckoutContainerProps) {
  // Calculate the total cost of all products currently in checkout
  const checkoutTotal = checkout.reduce(
    (total, item) => total + item.price * item.itemQuantity,
    0,
  );
  return (
    <div>
      <h2>Checkout</h2>
      <div className="checkout-container">
        {/* Display the checkout products or an empty cart message */}
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
        {/* Only display the total when checkout contains products */}
        {checkout.length > 0 && (
          <p>
            <b>Total: ${checkoutTotal.toFixed(2)}</b>
          </p>
        )}
        {/* Only show the empty cart button when there are products to remove */}
        {checkout.length > 0 && (
          <button onClick={handleEmptyCheckout}>Empty Cart</button>
        )}
      </div>
    </div>
  );
}
