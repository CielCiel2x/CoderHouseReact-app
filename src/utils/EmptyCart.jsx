import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import EmptyCartState from "../images/empty-cart.svg";

function EmptyCart() {
  return (

    <>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={EmptyCartState} />

        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 600, textAlign: "center", marginTop: 2 }}
        >
          Your cart is empty
        </Typography>

        <Link to="/catalog/">
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: 2,
            width: 250,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          return to the catalog
        </Button>
        </Link>
      </Box>
    </>
  );
}

export default EmptyCart;
