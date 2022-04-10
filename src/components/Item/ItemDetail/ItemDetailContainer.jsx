import React, { useEffect, useState } from "react";
import MyLoader from "../../../utils/MyLoader";
import Promises from "../Promises";
import ItemDetail from "./ItemDetail";
import Products from "../../../utils/Products";
import { useParams } from "react-router-dom";


function ItemDetailContainer({ cartAdd }) {

  const [productDetails, setProductDetails] = useState({});
  let [loading, setLoading] = useState(true);
  const {itemId} = useParams()

  useEffect(() => {
    setLoading(true);
    Promises(3000, Products[itemId - 1])
      .then((result) => {
        setProductDetails(result);
        setLoading(false)
      })
      .catch("error");
  }, [itemId]);

  return (
    <>
      {loading ? (
        <MyLoader loading={loading} />
      ) : (
        <ItemDetail productDetails={productDetails} cartAdd={cartAdd} />
      )}
    </>
  );
}

export default ItemDetailContainer;
