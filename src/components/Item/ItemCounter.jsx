import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function ItemCounter({ stock, name, cartAdd }) {
  const [amountProduct, SetAmountToBuy] = useState(0);

  function addUnit() {
    SetAmountToBuy(amountProduct + 1);
  }

  function minusUnit() {
    SetAmountToBuy(amountProduct - 1);
  }

  function onAdd(buyingAmount) {
    cartAdd(buyingAmount);
    alert(`you bought ${buyingAmount} of ${name}`);
  }

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          minWidth: "80",
          maxWidth: 250,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: 1,
            borderColor: "grey.300",
            marginRight: 2,
            marginBottom: 2,

            boxShadow: 5,
            width: "100%",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton
              aria-label="RemoveIcon"
              size="small"
              color="primary"
              disabled={amountProduct <= 0 ? true : false}
              onClick={minusUnit}
            >
              <RemoveIcon fontSize="inherit" />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 2,
            }}
          >
            <Typography align="center">{amountProduct}</Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton
              aria-label="AddIcon"
              size="small"
              color="primary"
              disabled={amountProduct >= stock ? true : false}
              onClick={addUnit}
            >
              <AddIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="secondary"
            disabled={amountProduct > 0 ? false : true}
            onClick={() => onAdd(amountProduct)}
            sx={{ width: "100%" }}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </>
  );
}
