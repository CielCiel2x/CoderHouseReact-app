import React from "react";
import { CartContext } from "../../../Contexts/CartContext";
import { useContext } from "react";

import Lottie from "lottie-react";
import SuccessPurchase from "../../../images/SuccessPurchase.json";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import MyLoader from "../../../utils/MyLoader";
import { Link } from "react-router-dom";

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
          <Link to={`/home`}>
            <Button
            variant="text"
            sx={{ marginTop: 3, fontSize: "1.5rem" }}
                    >
            Return to homepage
                    </Button>
          </Link>
        </Box>
      )}
    </>
  );
}

export default ApprovedPurchase;
