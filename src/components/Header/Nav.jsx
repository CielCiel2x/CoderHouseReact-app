import { Typography } from "@mui/material";
import React from "react";



export default function Nav() {
    return(
        <>
        <Typography
        color="primary">
        <nav className="light-color">
            <ul >
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Catalogue</a></li>
                <li><a href="#!">Custom</a></li>
                <li><a href="#!">Gallery</a></li>
                <li><a href="#!">Contact</a></li>
            </ul>
        </nav>
        </Typography>
        
        
        </>
    );
}