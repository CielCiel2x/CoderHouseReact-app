import Logo from "../../images/logo.png";
import React from "react";
import { Link } from 'react-router-dom';

export default function HomeLogo() {
  return (
    <>
      <Link to={`/home`}>
        <img src={Logo} alt="" className="header__logo" />
      </Link>
    </>
  );
}
