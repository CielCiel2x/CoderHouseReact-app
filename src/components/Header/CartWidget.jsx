import React from 'react';
import Button from "@mui/material/Button"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from "@mui/material/Badge"



export default function CartWidget() {



    return(
        <>
        <div className="light-color">
         <StyledBadge badgeContent={4} color="primary">
        <Button
        startIcon={<ShoppingCartIcon/>}
        variant="primaryColor"
        size="medium">
            My Cart
        </Button>
        </StyledBadge>
        </div>
        </>



    );
}


