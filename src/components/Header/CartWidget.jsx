import React from 'react';
import Button from "@mui/material/Button"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from "@mui/material/Badge"



export default function CartWidget() {



    return(
        <>
         <div>
         <StyledBadge badgeContent={4}
                        color="primary">
        <Button
        startIcon={<ShoppingCartIcon/>}
        variant="outlined"
        color="primary">
            My Cart
        </Button>
        </StyledBadge>
        </div>
        </>



    );
}


