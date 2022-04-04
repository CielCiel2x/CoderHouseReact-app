import React from 'react'
import Items from './Items'

export default function ItemList({ProductsFullList, cartAdd}) {

  return (
    ProductsFullList.map(product => (
        <Items
        key={product.sku}
        name={product.name}
        price={product.price}
        productImage={product.productImage}
        stock={product.stock}
        cartAdd={cartAdd}/>
    ))

  )
}