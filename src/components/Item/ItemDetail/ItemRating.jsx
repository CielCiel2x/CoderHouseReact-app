import React from 'react';
import StarRateIcon from "@mui/icons-material/StarRate";




export default function ItemRating({ItemRatings}) {

    return [...Array(ItemRatings)].map((e, i) => <StarRateIcon color="primary" key={i}/>);
  }