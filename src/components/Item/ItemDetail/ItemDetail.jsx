import { Box, Typography } from "@mui/material";
import * as React from "react";

import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import ItemCounter from "../ItemCounter";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FastForwardIcon from "@mui/icons-material/FastForward";

import ItemRating from "./ItemRating";

export default function ItemDetail({ productDetails, cartAdd }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: { xs: "none", md: 7, xl: 15 },
          alignItems: "center",
        }}
      >
        {/* G A L E R I A */}
        <Box>
          <img
            src={productDetails.productImage}
            className="product__image"
            alt="#"
          />
        </Box>

        {/* D A T O S   D E   P R O D U C T O */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderLeft: { xs: "unset", md: 2.3 },
            borderColor: { xs: "none", md: "#c9c9c9" },
            paddingLeft: { xs: "none", md: 5, xl: 15 },
            width: 500
          }}
        >
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.3,
              }}
            >
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
                <ItemRating ItemRatings={productDetails.rating} />
              </Box>
              <Typography variant="caption">
                {`${productDetails.rating}`} out of 5 stars
              </Typography>
            </Box>
              <ItemCounter stock={productDetails.stock} cartAdd={cartAdd} sx={{width: "100%"}}/>
          </CardContent>

        </Box>
      </Box>
    </>
  );
}
