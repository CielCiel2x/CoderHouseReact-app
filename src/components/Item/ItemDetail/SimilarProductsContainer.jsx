import React, { useEffect, useState } from "react";
import SimilarProducts from "./SimilarProducts";
import MyLoader from "../../../utils/MyLoader";
import { useParams } from "react-router-dom";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function SimilarProductsContainer({ productDetails }) {
  let [loading, setLoading] = useState(true);
  const { category } = useParams();

  const dataBase = getFirestore();
  const productsColl = collection(dataBase, "products");

  const [ProductsAlternatives, setProductsAlternatives] = useState([]);
  useEffect(() => {
    const q = query(productsColl, where("category", "==", category));
    setLoading(true);
    getDocs(q).then((res) => {
      setProductsAlternatives(
        res.docs.map((item) => ({ sku: item.id, ...item.data() }))
      );
    });
    setLoading(false);
  }, [productDetails]);

  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <SimilarProducts
          ProductsAlternatives={ProductsAlternatives}
          category={category}
        />
      )}
    </>
  );
}

export default SimilarProductsContainer;
