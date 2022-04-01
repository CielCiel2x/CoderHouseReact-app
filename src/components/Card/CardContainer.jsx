/* import { Box } from "@mui/material";
import React, { useState } from "react";
import TestingCustom from "../TestingCustom";
import AddingAmount from "./AddingAmount";


export default function CardContainer({onAdd}) {

const stockMaximo = 5;
const [amountToBuy, SetAmountToBuy] = useState(1);

  return (
    <>
      <Box
      sx={{
          width: 500,

          boxShadow: 9,
          borderRadius: 2,
          margin: 2,

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",


      }}>
{         <AddingAmount stockMaximo={stockMaximo} amountToBuy={amountToBuy} SetAmountToBuy={SetAmountToBuy}/> }

<TestingCustom stockMaximo={stockMaximo} amountToBuy={amountToBuy} SetAmountToBuy={SetAmountToBuy}/>
      </Box>
    </>
  );
}
 */