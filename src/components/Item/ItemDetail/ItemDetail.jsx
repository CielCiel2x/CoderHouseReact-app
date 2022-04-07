import { Box, Typography } from "@mui/material";
import * as React from "react";

import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import ItemCounter from "../ItemCounter";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FastForwardIcon from "@mui/icons-material/FastForward";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";

export default function ItemDetail({ productDetails, cartAdd }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 7,
          alignItems: "center",
          margin: 5,
        }}
      >
        {/* G A L E R I A */}
        <Box>
          <img
            src="https://m.media-amazon.com/images/I/61yjhxVymPL._AC_SL1500_.jpg"
            className="product__image"
            alt="#"
          />
        </Box>
        {/* D A T O S   D E   P R O D U C T O */}
        <Box>
          <CardHeader
            title={productDetails.name}
            subheader={`stock: ${productDetails.stock}`}
          />
          <CardContent>
            <Typography variant="h4" component="div">
              ${productDetails.price}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="body2">
              in 12 x {(productDetails.price / 12) * 1.5}
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <LocalShippingIcon color="primary" />
                <Typography>International Shipping within 72hs</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <FastForwardIcon color="primary" />
                <Typography>Available for high priority delivery.</Typography>
              </Box>
            </Box>
            <Box sx={{ my: 2 }}>
              <Box>
                <StarRateIcon color="primary" />
                <StarRateIcon color="primary" />
                <StarRateIcon color="primary" />
                <StarRateIcon color="primary" />
                <StarPurple500Icon color="primary" />
              </Box>
              <Typography variant="caption">4 out of 5 stars</Typography>
            </Box>
          </CardContent>
          <ItemCounter stock={productDetails.stock} cartAdd={cartAdd} />
        </Box>
      </Box>
    </>
  );
}
