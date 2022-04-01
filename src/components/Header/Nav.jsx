import { Typography } from "@mui/material";
import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="light-color">
        <ul>
          <Typography color="primary">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">Catalogue</a>
            </li>
            <li>
              <a href="#!">Custom</a>
            </li>
            <li>
              <a href="#!">Gallery</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </Typography>
        </ul>
      </nav>
    </>
  );
}
