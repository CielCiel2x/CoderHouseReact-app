import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { IconButton } from "@mui/material";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CartItems({
  sku,
  name,
  price,
  productImage,
  amountProduct,
  removeFromCart,
}) {
  return (
    <>
      <Card
        className="cartItem__card"
        key={sku}
        sx={{
          width: { xs: 300, md: 400, xl: "90%" },
          boxShadow: 12,
          margin: 1,
          height: { xs: 450, xl: 150 },
          gap: { xs: 0, md: 3 },
          px: 3,
        }}

      >
        <Box sx={{flexGrow: 1}}>
          <img src={productImage} className="cartProduct__image"/>
        </Box>

        <CardHeader
          title={name}
          subheader={`price: $${price} | units: ${amountProduct}`}
          sx={{
            width: { sm: "100%", md: "70%", xl: "100%" },
            flexGrow: 1
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "row", md: "column" },
            alignItems: { xs: "center", md: "center" },
            alignSelf: { xs: "start", xl: "center" },
            gap: { xs: 2, md: 1 },
            width: { sm: "100%", md: "70%", xl: "70%" },

          }}
        >
          <Typography
            variant="subtitle2"
            className="cart-product__subtotal"
            sx={{ fontWeight: 800, textAlign: "center" }}
          >
            subtotal: {`$${amountProduct * price}`}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mx: "auto",
            px: 5,
            gap: 2,
            
          }}
        >
          <Link to={`/item/${sku}`}>
            <Button variant="outlined" color="secondary" sx={{ my: 4 }}>
              View product
            </Button>
          </Link>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => removeFromCart(sku)}
            color="primary"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Card>
    </>
  );
}

export default CartItems;
