import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function ItemCounter({ stock, cartAdd }) {
  const [amountProduct, SetAmountToBuy] = useState(0);
  const [wasAdded, SetWasAdded] = useState(false);

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  function onAdd(buyingAmount) {
    cartAdd(buyingAmount);
    SetWasAdded(true);
    setChecked(true);
  }

  function addUnit() {
    SetAmountToBuy(amountProduct + 1);
  }

  function minusUnit() {
    SetAmountToBuy(amountProduct - 1);
  }

  return (
    <>
      {wasAdded ? (
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 300,
            }}
          >
            <Typography variant="h6">
              Item added successfully!
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Link to={`/catalog/catalog`}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onAdd(amountProduct)}
                  sx={{ width: "100%", marginBottom: 2 }}
                >
                  view catalog
                </Button>
              </Link>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Button
                variant="outlined"
                color="primary"
                disabled={amountProduct > 0 ? false : true}
                onClick={() => onAdd(amountProduct)}
                sx={{ width: "100%" }}
              >
                go to cart
              </Button>
            </Box>
          </Box>
        </Slide>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 300,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              border: 1,
              borderColor: "grey.300",
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

          <Box sx={{ width: "100%" }}>
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
      )}
    </>
  );
}
