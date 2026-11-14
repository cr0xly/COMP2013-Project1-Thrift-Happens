import { useState } from "react";
import { products } from "../data/data";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";

export default function ThriftHappens() {
  const [items, setItems] = useState<ClothingProduct[]>(products);

  return (
    <div>
      <h1>Thrift Happens</h1>
      <ItemsContainer items={items} />
    </div>
  );
}
