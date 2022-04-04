import Logo from "../../images/logo.png";
import React from "react";

export default function HomeLogo() {
  return (
    <>
      <a href="#!" >
        <img src={Logo} alt="" className="header__logo" />
      </a>
    </>
  );
}
