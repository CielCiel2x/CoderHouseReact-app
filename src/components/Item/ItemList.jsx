import React from "react";
import Items from "./Items";

export default function ItemList({ ItemProduct }) {
  return ItemProduct.map((product) => (
    <Items
      sku={product.sku}
      key={product.sku}
      name={product.name}
      price={product.price}
      productImage={product.productImage}
      stock={product.stock}
      category={product.category}
    />
  ));
}
