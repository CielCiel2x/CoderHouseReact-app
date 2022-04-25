import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Box } from "@mui/material";
import MyLoader from "../../utils/MyLoader";
import { useParams } from "react-router-dom";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer({ cartAdd }) {
  const [ItemProduct, setItemProduct] = useState([]);
  let [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const dataBase = getFirestore();
  const productsColl = collection(dataBase, "products");

   useEffect(() => {
    if (categoryId === "catalog" || categoryId === undefined) {
      setLoading(true);
      getDocs(productsColl).then((res) => {
        setItemProduct(
          res.docs.map((item) => ({ sku: item.id, ...item.data() }))
        );
        setLoading(false);
      });

    } else {
      const q = query(productsColl, where("category", "==", categoryId));
      setLoading(true);
      getDocs(q).then((res) => {
        setItemProduct(
          res.docs.map((item) => ({ sku: item.id, ...item.data() }))
        );
        setLoading(false);
      });

    }
  }, [categoryId]);

  return (
    <>
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
        {loading ? (
          <MyLoader loading={loading} />
        ) : (
          <ItemList ItemProduct={ItemProduct} cartAdd={cartAdd} />
        )}
      </Box>
    </>
  );
}
