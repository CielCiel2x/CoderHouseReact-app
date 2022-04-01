import * as React from "react";
import HomeLogo from "./HomeLogo";
import Nav from "./Nav";
import SessionBuy from "./SessionBuy";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <>
      <Box sx={{ bgcolor: "secondary.dark" }}>
        <header className="header">
          <HomeLogo />
          <Nav />
          <SessionBuy />
        </header>
      </Box>
    </>
  );
}
