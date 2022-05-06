import React from "react";
import CartItems from "./CartItems";

function CartProductList({ cart, removeFromCart }) {
  return cart.map((product) => (
    <CartItems
      sku={product.sku}
      key={product.sku}
      name={product.name}
      price={product.price}
      productImage={product.productImage}
      stock={product.stock}
      amountProduct={product.amountProduct}
      removeFromCart={removeFromCart}
      category={product.category}
    />
  ));
}

export default CartProductList;
