import React, { useContext } from 'react'
import { CartContext } from "../../Contexts/CartContext";

import CartItems from './CartItems';

function CartProductList() {
  const { cart, removeFromCart } = useContext(CartContext);
    return cart.map((product) => (
      <CartItems
        sku={product.sku}
        key={product.sku}
        name={product.name}
        price={product.price}
        productImage={product.productImage}
        stock={product.stock}
        amountProduct={product.amountProduct}
      />
    ));
  
}

export default CartProductList