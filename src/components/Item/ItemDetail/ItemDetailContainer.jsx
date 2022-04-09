import React, { useEffect, useState } from "react";
import MyLoader from "../../../utils/MyLoader";
import { fetchProduct } from "../../../utils/Products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ cartAdd }) {
  const [productDetails, setProductDetails] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct().then((res) => {
      setProductDetails(res);
      setLoading(false)
    });
  }, []);

  return (
    <>
    {
      loading ? <MyLoader loading={loading}/> :
      <ItemDetail productDetails={productDetails} cartAdd={cartAdd} />
    }
    </>
  );
}

export default ItemDetailContainer;
