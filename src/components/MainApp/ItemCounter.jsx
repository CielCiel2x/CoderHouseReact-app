import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function AddingAmount({amountProduct, SetAmountToBuy, onAdd, StockAmount}) {
    StockAmount = 5;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 350,
          border: 1,
          borderColor: "grey.500",
          borderRadius: 1.5,
          margin: 5
            }}
      >





        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center"
          }}>
<IconButton aria-label="RemoveIcon" size="small" color="primary" disabled={amountProduct <=0 ? true : false} onClick={() => SetAmountToBuy(--amountProduct)}>
  <RemoveIcon fontSize="inherit" />
</IconButton>

        </Box>

        <Box
          sx={{
            flexGrow: 3,
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
<IconButton aria-label="AddIcon" size="small" color="primary" disabled={amountProduct >= StockAmount ? true : false} onClick={() => SetAmountToBuy(++amountProduct)}>
  <AddIcon fontSize="inherit" />
</IconButton>
        </Box>


      </Box>

      <Box>
      <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={()=> onAdd(amountProduct)}>
                Add to cart
            </Button>
      </Box>
    </>
  );
}
