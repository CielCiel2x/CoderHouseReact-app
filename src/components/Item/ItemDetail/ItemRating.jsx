import React from 'react';
import StarRateIcon from "@mui/icons-material/StarRate";




export default function ItemRating({ItemRatings}) {

    console.log(ItemRatings);

    return [...Array(ItemRatings)].map((i) => <StarRateIcon color="primary" key={i}/>);
  }