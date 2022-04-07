import React, { useEffect, useState } from "react";
import { fetchProduct } from "../../../utils/Products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ cartAdd }) {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetchProduct().then((res) => {
      setProductDetails(res);
    });
  }, []);

  return (
    <>
      <ItemDetail productDetails={productDetails} cartAdd={cartAdd} />
    </>
  );
}

export default ItemDetailContainer;
