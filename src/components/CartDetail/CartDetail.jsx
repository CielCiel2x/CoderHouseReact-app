import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartProductList from "./CartProductList";

function CartDetail() {
  const { cart, removeFromCart, buyAll } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.amountProduct;
    });
    setTotal(total);
  }, [cart]);
  


  console.log(cart);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", xl: "row" },
          paddingTop: 5,
          alignItems: "flexStart",
          px: {sm: 0, md: 7, xl:15}
        }}
      >
        <Box
          sx={{
            flexGrow: 5,
          }}
        >
          <Typography variant="h4" component="h1" sx={{ fontWeight: 800 }}>
            YOUR CART
          </Typography>

          <Box>
              <CartProductList/>
          </Box>
        </Box>

        <Box
          sx={{
            border: { xs: 0, md: 2.3 },
            borderColor: { xs: 0, md: "#c9c9c9" },
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            padding: 3,
            marginTop: { xs: 5, xl: 0 },
            gap: 4,
            height: 500,
          }}
        >
          <Typography
            variant="h5"
            className="CartDetail.purchaseSummary"
            sx={{ fontWeight: 800 }}
          >
            Purchase summary:
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 2,
              gap: 4,
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>shipping:</Typography>
            <Typography sx={{ fontWeight: 600 }}>discounts:</Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 400,
                borderTop: 2,
                borderColor: "grey.500",
                paddingTop: 2,
              }}
            >
              total: <span>{total}</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CartDetail;
