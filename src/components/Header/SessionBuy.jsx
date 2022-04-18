import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import UserButton from "./UserButton";
import {CartContext} from "../../Contexts/CartContext";


export default function SessionBuy() {
  const {cart} = useContext(CartContext);
  return (
    <>
      <div className="session__container">

        <CartWidget cartNumber={cart.length} />

        <UserButton />
      </div>
    </>
  );
}
