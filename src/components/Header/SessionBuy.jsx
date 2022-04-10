import React from "react";
import CartWidget from "./CartWidget";
import UserButton from "./UserButton";

export default function SessionBuy({ cartNumber }) {
  return (
    <>
      <div className="session__container">
        <CartWidget cartNumber={cartNumber} />
        <UserButton />
      </div>
    </>
  );
}
