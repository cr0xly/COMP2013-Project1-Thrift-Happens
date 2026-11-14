import { useState } from "react";
import { products } from "../data/data";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import CheckoutContainer from "./CheckoutContainer";

export default function ThriftHappens() {
  const [items, setItems] = useState<ClothingProduct[]>(products);
  const [checkout, setCheckout] = useState<ClothingProduct[]>([]);

  const handleAddToCheckout = (id: number, quantity: number) => {
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
    const existingItem = checkout.find((item) => item.id === id);
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

  return (
    <div>
      <h1>Thrift Happens</h1>
      <ItemsContainer items={items} handleAddToCheckout={handleAddToCheckout} />
      <CheckoutContainer checkout={checkout} />
    </div>
  );
}
