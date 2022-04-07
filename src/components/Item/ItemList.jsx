import React from "react";
import Items from "./Items";

export default function ItemList({ ItemProduct, cartAdd }) {
  return ItemProduct.map((product) => (
    <Items
      key={product.sku}
      name={product.name}
      price={product.price}
      productImage={product.productImage}
      stock={product.stock}
      cartAdd={cartAdd}
    />
  ));
}
