import React, { useEffect, useState } from "react";
import Products from "../../../utils/Products";
import SimilarProducts from './SimilarProducts';
import Promises from "../../../utils/Promises";
import MyLoader from "../../../utils/MyLoader";
import { useParams } from "react-router-dom";

function SimilarProductsContainer({productDetails}) {
    let [loading, setLoading] = useState(true);
    const {itemId} = useParams()

    const [ProductsAlternatives, setProductsAlternatives] = useState([]);
    useEffect(()=> {
      setLoading(true);
        Promises(3000, Products)
        .then((result) => {
          setLoading(true);
            setProductsAlternatives(result.filter(obj => obj.category === productDetails.category))
            setLoading(false);
        })
        .catch("error");


    },[itemId])


  return (
      <>
    {loading ? <MyLoader/> : <SimilarProducts ProductsAlternatives={ProductsAlternatives}/>}
    </>
  )
}

export default SimilarProductsContainer