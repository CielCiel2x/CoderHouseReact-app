import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Promises from "../Item/Promises";
import Products from "../../utils/Products";
import ItemList from "../Item/ItemList";
import MyLoader from "../../utils/MyLoader";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Home() {
  const [ItemProduct, setItemProduct] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promises(3000, Products)
      .then((result) => {
        setItemProduct(result.filter(obj => obj.rating === 5));
        setLoading(false);
      })
      .catch("error");
  }, []);

  return (
    <>
      <HeroSection />

      <Typography variant="h3" sx={{textAlign: "center"}}>
          OUR RECOMMENDATIONS
        </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: 8,
          margin: 3,
        }}
      >

        {loading ? <MyLoader /> : <ItemList ItemProduct={ItemProduct} />}
      </Box>
    </>
  );
}

export default Home;
