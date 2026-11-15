import { useState } from "react";
import { products } from "../data/data";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import CheckoutContainer from "./CheckoutContainer";
import NavBar from "./NavBar";

export default function ThriftHappens() {
  // Store the available products and the items currently in checkout
  const [items, setItems] = useState<ClothingProduct[]>(products);
  const [checkout, setCheckout] = useState<ClothingProduct[]>([]);

  // Add the selected quantity of a product to a checkout
  const handleAddToCheckout = (id: number, quantity: number) => {
    // Make sure the product exists and the requested quantity is available
    const selectedItem = items.find((item) => item.id === id);
    if (selectedItem === undefined) {
      return;
    }
    if (quantity <= 0 || quantity > selectedItem.quantity) {
      return;
    }
    const checkoutItem: ClothingProduct = {
      ...selectedItem,
      itemQuantity: quantity,
    };

    // Check if the product is already in checkout to avoid duplicates
    const existingItem = checkout.find((item) => item.id === id);
    // If the product is already in checkout, increase its quantity
    // Otherwise add it as a new checkout item
    if (existingItem !== undefined) {
      setCheckout((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              itemQuantity: item.itemQuantity + quantity,
            };
          }
          return item;
        }),
      );
    } else {
      setCheckout((prev) => [...prev, checkoutItem]);
    }

    // Remove the purchased quantity from the available stock
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - quantity,
          };
        }
        return item;
      }),
    );
  };

  // Remove a product from checkout and return its quantity to stock
  const handleRemoveFromCheckout = (id: number) => {
    const removedItem = checkout.find((item) => item.id === id);
    if (removedItem === undefined) {
      return;
    }
    // Filter out the selected product from checkout
    setCheckout((prev) => prev.filter((item) => item.id !== id));
    // Add the removed products' quantity back to the available stock
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + removedItem.itemQuantity,
          };
        }
        return item;
      }),
    );
  };

  // Empty the entire checkout and restore the stock for each product
  const handleEmptyCheckout = () => {
    setItems((prev) =>
      prev.map((item) => {
        // Check if the current inventory product has a matching checkout item
        const checkoutItem = checkout.find(
          (cartItem) => cartItem.id === item.id,
        );

        // If the product isn't in checkout, leave its stock unchanged
        if (checkoutItem === undefined) {
          return item;
        }
        // Return the checkout quantity back to the matching inventory product
        return {
          ...item,
          quantity: item.quantity + checkoutItem.itemQuantity,
        };
      }),
    );

    setCheckout([]);
  };

  return (
    <div>
      <NavBar />
      <div className="store-layout">
        <ItemsContainer
          items={items}
          handleAddToCheckout={handleAddToCheckout}
        />
        <CheckoutContainer
          checkout={checkout}
          handleRemoveFromCheckout={handleRemoveFromCheckout}
          handleEmptyCheckout={handleEmptyCheckout}
        />
      </div>
    </div>
  );
}
