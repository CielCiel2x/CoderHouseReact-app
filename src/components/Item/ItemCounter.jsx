import React, {useEffect, useContext, useState} from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CartContext from "../../Contexts/CartContext";

export default function ItemCounter({
  onAdd,
  productDetails,
  addToCart,
  SetAmountToBuy,
  amountProduct,
  setWasAdded,
  cart
}) {
  function addUnit() {
    SetAmountToBuy(amountProduct + 1);
  }

  function minusUnit() {
    SetAmountToBuy(amountProduct - 1);
  }




  // C H E C K   C A R T   A M O U N T   +   N E W   I N T E N D E D   A M O U N T
  const [isOverStock, setIsOverStock] = useState(false);


 useEffect(() => {

  const indexOfProduct = cart.findIndex((item) => item.sku === productDetails.sku);

  if (indexOfProduct == -1) {
setIsOverStock(false);
  } else {
    (cart[indexOfProduct].amountProduct + amountProduct > productDetails.stock) ? setIsOverStock(true) : setIsOverStock(false);
  }

}, [amountProduct]) 





  return (
    <>
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
              disabled={((amountProduct >= productDetails.stock) || (isOverStock)) ? true : false}
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
            disabled={((amountProduct > 0)&&(!isOverStock)) ? false : true}
            onClick={() => {
              onAdd(amountProduct);
              addToCart({
                ...productDetails,
                amountProduct,
                subtotal: productDetails.price * amountProduct,
              });
              setWasAdded(true);
            }}
            sx={{ width: "100%" }}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </>
  );
}

/* addToCart(...productDetails, amountProduct) */
