import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import ViewDetails from "./ViewDetails";

export default function Items({ sku, name, price, productImage, stock }) {
  return (
    <>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 350,
          boxShadow: 12,
          margin: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        key={sku}
      >
        <CardHeader
          title={name}
          subheader={`price: $${price} | stock: ${stock}`}
        />
        <CardMedia component="img" height="194" image={productImage} />
        <ViewDetails />
      </Card>
    </>
  );
}
