import React, { useEffect, useState } from "react";
import Products from "../../../utils/Products";
import SimilarProducts from './SimilarProducts';
import Promises from "../Promises";
import MyLoader from "../../../utils/MyLoader";

function SimilarProductsContainer({productDetails}) {
    let [loading, setLoading] = useState(true);

    const [ProductsAlternatives, setProductsAlternatives] = useState([]);
    useEffect(()=> {
        Promises(3000, Products)
        .then((result) => {
            setLoading(true);
            setProductsAlternatives(result.filter(obj => obj.category === productDetails.category))
            setLoading(false);
        })
        .catch("error");


    },[])


  return (
      <>
    {loading ? <MyLoader/> : <SimilarProducts ProductsAlternatives={ProductsAlternatives}/>}
    </>
  )
}

export default SimilarProductsContainer