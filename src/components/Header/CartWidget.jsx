import React, { useContext } from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StyledBadge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import {CartContext} from "../../Contexts/CartContext";

export default function CartWidget() {

  const {cart} = useContext(CartContext);
const cartNumber = cart.reduce((acc, object) => {
  return acc + object.amountProduct;
},0);

  return (
    <>
      <div>
        <StyledBadge badgeContent={cartNumber} color="primary">
        <Link to="/cart">
          <Button
            startIcon={<ShoppingCartIcon />}
            variant="outlined"
            color="primary"
          >
            Cart
          </Button>
          </Link>
        </StyledBadge>
      </div>
    </>
  );
}
