import { Box, Card, Rating, Typography } from "@mui/material";
import * as React from "react";

import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import ItemCounter from "../ItemCounter";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FastForwardIcon from "@mui/icons-material/FastForward";
import SimilarProductsContainer from "./SimilarProductsContainer";

import ItemDetailClasses from "./ItemDetail.module.css";

export default function ItemDetail({ productDetails, cartAdd }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
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
            className="itemDetail__content__sticky"
            sx={{
              display: "flex",
              flexDirection: "column",
              borderLeft: { xs: 0, md: 2.3 },
              borderColor: { xs: 0, md: "#c9c9c9" },
              paddingLeft: { xs: 0, md: 5, xl: 15 },
              width: { xs: 350, md: 500 },
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
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                variant="body2"
              >
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
              <Box sx={{ my: 2, display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" component="legend">
                  Product's rating:
                </Typography>
                <Rating
                  name="read-only"
                  value={productDetails.rating}
                  readOnly
                />
                <Typography variant="caption">
                  {`${productDetails.rating}`} out of 5 stars
                </Typography>
              </Box>
              <ItemCounter
                stock={productDetails.stock}
                cartAdd={cartAdd}
                sx={{ width: "100%" }}
              />
            </CardContent>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "80%", md: "60%", xl: 1000 } }}>
          <Card
            sx={{ padding: 3 }}
            className={ItemDetailClasses.description__card}
          >
            <Typography>{productDetails.description}</Typography>
          </Card>
        </Box>

        <Box sx={{ marginTop: 7 }}>
          <Box className={ItemDetailClasses.headerbanner}>
            <p>Similar products you may also like:</p>
          </Box>
          <Box className={ItemDetailClasses.similar__productsContainer}>
            <SimilarProductsContainer productDetails={productDetails} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
