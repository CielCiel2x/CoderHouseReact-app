import React from 'react';
import Button from "@mui/material/Button"
import PersonIcon from '@mui/icons-material/Person';




export default function UserButton() {

    return(
        <>
        <div class="cartButton">
            <Button
            startIcon={<PersonIcon/>}
            variant="contained"
            color="inherit"
            size="large">
                Login
            </Button>
        </div>
        </>



    );
}