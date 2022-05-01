import React from "react";
import { CartContext } from "../../../Contexts/CartContext";
import { useContext, useState } from "react";

import Lottie from "lottie-react";
import SuccessPurchase from "../../../images/SuccessPurchase.json";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import MyLoader from "../../../utils/MyLoader";

const animationOptions = {
  animationData: SuccessPurchase,
  autoplay: true,
  loop: false,
  style: {
    width: "25vw",
  },
};

function ApprovedPurchase() {
  const { purchaseId } = useContext(CartContext);
  return (
    <>
      {purchaseId === "" ? (
        <MyLoader />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie {...animationOptions} />
          <Typography variant="h4">your purchase ID is:</Typography>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            {purchaseId}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default ApprovedPurchase;
