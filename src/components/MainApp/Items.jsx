import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';



import ItemCounter from './ItemCounter';
import { Box } from '@mui/material';

export default function Items({sku, name, price, productImage, stock}) {

  return (
    <>
     <Card  sx={{ minWidth: 300, maxWidth: 300,boxShadow: 12, margin: 1, height:450}} key={sku}>
      <CardHeader
        title ={name}
        subheader={`price: $${price} | stock: ${ stock}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={productImage}
      />
      <Box>
      <ItemCounter stock={stock} name={name}/>
      </Box>


    </Card>

    </>

);
}