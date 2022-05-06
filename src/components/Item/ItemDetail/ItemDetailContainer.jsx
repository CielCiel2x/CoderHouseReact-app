import React, { useEffect, useState } from "react";
import MyLoader from "../../../utils/MyLoader";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [productDetails, setProductDetails] = useState({});
  let [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  const [wasAdded, SetWasAdded] = useState(false);

  const [checked, setChecked] = useState(false);

  const [rating, setRating] = useState(0);

  function onAdd() {
    SetWasAdded(true);
    setChecked(true);
  }

  const dataBase = getFirestore();
  const itemDataBase = doc(dataBase, "products", itemId);

  useEffect(() => {
    setLoading(true);
    getDoc(itemDataBase).then((res) => {
      setProductDetails({ sku: res.id, ...res.data() });
      setLoading(false);
    });
  }, [itemId]);

  return (
    <>
      {loading ? (
        <MyLoader loading={loading} />
      ) : (
        <ItemDetail
          rating={rating}
          setRating={setRating}
          productDetails={productDetails}
          onAdd={onAdd}
          wasAdded={wasAdded}
          SetWasAdded={SetWasAdded}
          checked={checked}
          setChecked={setChecked}
        />
      )}
    </>
  );
}

export default ItemDetailContainer;
