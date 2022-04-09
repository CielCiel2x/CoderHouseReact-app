import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Items({ sku, name, price, productImage, stock }) {
  return (
    <>

      <Card
        sx={{
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
          sx={{flexGrow: 1}}
          title={name}
          subheader={`price: $${price} | stock: ${stock}`}
        />
        <CardMedia component="img" height="300" image={productImage} />

        <Button
      variant="outlined"
      color="secondary"
      sx={{ my: 4, width: "80%", mx: "auto" }}
    >
              <Link to={`/item/${sku}`}>
      View Details
      </Link>
    </Button>

      </Card>
    </>
  );
}
