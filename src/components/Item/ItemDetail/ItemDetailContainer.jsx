import React, { useEffect, useState } from "react";
import MyLoader from "../../../utils/MyLoader";
import Promises from "../../../utils/Promises";
import ItemDetail from "./ItemDetail";
import Products from "../../../utils/Products";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {

  const [productDetails, setProductDetails] = useState({});
  let [loading, setLoading] = useState(true);
  const {itemId} = useParams();

  const [wasAdded, SetWasAdded] = useState(false);

  const [checked, setChecked] = React.useState(false);

  function onAdd() {
    SetWasAdded(true);
    setChecked(true);
  }


  useEffect(() => {
    setLoading(true);
    Promises(2000, Products[itemId - 1])
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
        <ItemDetail
        productDetails={productDetails}
        onAdd={onAdd}
        wasAdded={wasAdded}
        SetWasAdded={SetWasAdded}
        checked={checked}
        setChecked={setChecked}/>

      )}
    </>
  );
}

export default ItemDetailContainer;
