import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import ItemList from "../Item/ItemList";
import MyLoader from "../../utils/MyLoader";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function Home() {
  const [ItemProduct, setItemProduct] = useState([]);
  let [loading, setLoading] = useState(true);

   useEffect(() => {
    const dataBase = getFirestore();
    const productsColl = collection(dataBase, "products");
      const q = query(productsColl, where("rating", ">=", 4));
      setLoading(true);
      getDocs(q).then((res) => {
        setItemProduct(
          res.docs.map((item) => ({ sku: item.id, ...item.data() }))
        );
        setLoading(false);
      });
  }, []);

  return (
    <>
      <HeroSection />

      <Typography variant="h3" sx={{textAlign: "center", marginTop: 3}}>
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
