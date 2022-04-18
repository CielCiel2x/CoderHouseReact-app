import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

function CartItems({ sku, name, price, productImage, amountProduct }) {
  return (
    <>
      <Card
      className="cartItem__card"
        sx={{
          minWidth: 260,
          width: { sm: "100%", xl: "80%" },
          boxShadow: 12,
          margin: 1,
          height: { sm: "unset", md: 250 },
          gap:3
        }}
        key={sku}
      >
        <Box className="cardImg__container">
        <img src={productImage} className="cartProduct__image" />
        </Box>

        <CardHeader
          title={name}
          subheader={`price: $${price} `}
          sx={{
            flexGrow: 1,
            width: { sm: "100%", md: "50%", xl: "40%" },
            px: 0,
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "start",
            flexGrow: 1,
            alignSelf:"center"
          }}
        >
          <Typography variant="h6">
            <span className="cart-product__units">{amountProduct}</span> units
          </Typography>
          <Typography
            variant="subtitle2"
            className="cart-product__subtotal"
            sx={{ fontWeight: 800 }}
          >
            subtotal: {`$${amountProduct * price}`}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mx: "auto", px: 5}}>
          <Link to={`/item/${sku}`}>
            <Button variant="outlined" color="secondary" sx={{ my: 4 }}>
              Go to product
            </Button>
          </Link>
        </Box>
      </Card>
    </>
  );
}

export default CartItems;
