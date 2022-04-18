import React, { useContext } from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StyledBadge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import {CartContext} from "../../Contexts/CartContext";

export default function CartWidget() {

  const {cart} = useContext(CartContext);

  return (
    <>
      <div>
        <StyledBadge badgeContent={cart.length} color="primary">
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
