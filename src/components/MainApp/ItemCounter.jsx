import React,{useState}  from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function ItemCounter({stock, name, cartAdd}) {

const [amountProduct, SetAmountToBuy] = useState(0);

function addUnit() {
  SetAmountToBuy(amountProduct + 1);
}

function minusUnit() {
  SetAmountToBuy(amountProduct - 1)
}

function onAdd(buyingAmount) {
  cartAdd(buyingAmount);
  alert( `you bought ${buyingAmount} of ${name}`);
}

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            minWidth: 125,
            border: 1,
            borderColor: "grey.300",
            marginRight: 2,
            marginBottom: 2,
            marginTop: 2,
            boxShadow: 5,
              }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center"
            }}>
        <IconButton aria-label="RemoveIcon" size="small" color="primary" disabled={amountProduct <=0 ? true : false} onClick={minusUnit}>
          <RemoveIcon fontSize="inherit" />
        </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 2,
        
            }}
          >
            <Typography align="center">
                {amountProduct}
            </Typography>
          </Box>
        
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center"
            }}
          >
        <IconButton aria-label="AddIcon" size="small" color="primary" disabled={amountProduct >= stock ? true : false} onClick={addUnit}>
          <AddIcon fontSize="inherit"/>
        </IconButton>
          </Box>
        </Box>

        <Box>
        <Button
              variant="contained"
              color="secondary"
              size="large"
              width="100%"
              disabled={amountProduct > 0 ? false : true}
              onClick={()=> onAdd(amountProduct)}>
                    <AddShoppingCartIcon fontSize="medium" />
              </Button>
        </Box>

      </Box>
    </>
  );
}
