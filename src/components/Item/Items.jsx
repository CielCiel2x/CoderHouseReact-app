import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Items({
  sku,
  name,
  price,
  productImage,
  stock,
  category,
}) {
  return (
    <>
      <Card
        sx={{
          minWidth: 260,
          width: 350,
          boxShadow: 12,
          margin: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        key={sku}
      >
        <CardHeader
          sx={{ flexGrow: 1 }}
          title={name}
          subheader={`price: $${price} | stock: ${stock}`}
        />
        <CardMedia component="img" height="300" image={productImage} />

        <Box sx={{ display: "flex", justifyContent: "center", mx: "auto" }}>
          <Link to={`/${category}/item/${sku}`}>
            <Button variant="outlined" color="secondary" sx={{ my: 4 }}>
              View Details
            </Button>
          </Link>
        </Box>
      </Card>
    </>
  );
}
