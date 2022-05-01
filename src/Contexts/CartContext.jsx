import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [purchaseId, setPurchaseId] = useState("");

  const addToCart = (product) => {
    const indexOfProduct = cart.findIndex((item) => product.sku === item.sku);
    if (indexOfProduct !== -1) {
      const newCart = [...cart];
      newCart[indexOfProduct].amountProduct += product.amountProduct;
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (RemoveItem) => {
    setCart(cart.filter((product) => product.sku !== RemoveItem));
  };

  const emptyCart = () => {
    setCart([]);
    alert("The cart was emptied");
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          emptyCart,
          purchaseId,
          setPurchaseId,
          setCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
