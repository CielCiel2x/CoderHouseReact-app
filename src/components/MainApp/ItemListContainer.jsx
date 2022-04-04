import React, { useEffect, useState } from 'react';
import Promises from './Promises';
import Products from '../Products';
import ItemList from './ItemList';
import { Box } from '@mui/material';


export default function ItemListContainer() {

    const [ItemProduct, setItemProduct] = useState([]);


useEffect(() => {
    Promises(3000, Products)
    .then(result => setItemProduct(result))
    .catch('error');

}, [ItemProduct])




    return(
        <>
        <Box sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      padding: 8,
                      margin: 3
        }}>
        <ItemList ProductsFullList={ItemProduct}/>

        </Box>


        </>
    );
}