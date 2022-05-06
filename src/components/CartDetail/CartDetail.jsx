import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartProductList from "./CartProductList";
import EmptyCart from "../../utils/EmptyCart";
import OrderFormContainer from "./OrderForm/OrderFormContainer";

import Modal from "@mui/material/Modal";

function CartDetail() {
  const { cart, emptyCart, removeFromCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  useEffect(() => {
    let totalAmount = 0;
    cart.forEach((product) => {
      totalAmount += product.price * product.amountProduct;
    });
    setTotalPrice(totalAmount);
  }, [cart]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <OrderFormContainer totalPrice={totalPrice} />
        </Box>
      </Modal>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", xl: "row" },
          paddingTop: 5,
          alignItems: "flexStart",
          px: { sm: 0, md: 7, xl: 15 },
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

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", xl: "column" },
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {cart.length > 0 ? (
              <CartProductList cart={cart} removeFromCart={removeFromCart} />
            ) : (
              <EmptyCart />
            )}
          </Box>
        </Box>

        <Box
          sx={{
            border: { xs: 0, md: 2.3 },
            borderColor: { xs: 0, md: "#c9c9c9" },
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
              total: $<span>{totalPrice}</span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 3,
              }}
            >
              <Button
                disabled={cart.length === 0 ? true : false}
                onClick={() => emptyCart()}
              >
                empty cart
              </Button>
              <Button
                disabled={cart.length === 0 ? true : false}
                variant="contained"
                onClick={handleOpenModal}
              >
                checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CartDetail;
