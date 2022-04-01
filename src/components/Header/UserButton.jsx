import React from 'react';
import Button from "@mui/material/Button"
import PersonIcon from '@mui/icons-material/Person';




export default function UserButton() {

    return(
        <>
        <div className="cartButton">
            <Button
            startIcon={<PersonIcon/>}
            variant="contained"
            color="primary"
            size="large">
                Login
            </Button>
        </div>
        </>



    );
}