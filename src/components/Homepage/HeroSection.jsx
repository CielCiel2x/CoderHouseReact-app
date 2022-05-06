import { Box, Typography } from "@mui/material";
import React from "react";
import HeroSectionClasses from "./HeroSection.module.css";

function HeroSection() {
  return (
    <Box
      sx={{ height: "90vh", display: "flex", alignItems: "center" }}
      className={HeroSectionClasses.hero__container}
    >
      <Typography
        variant="h1"
        color="primary"
        className={HeroSectionClasses.heroTitle}
        sx={{ textAlign: "center", width: { sm: "100%" } }}
      >
        SUSU STORE
      </Typography>
    </Box>
  );
}

export default HeroSection;
