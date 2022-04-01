import React, { useState } from 'react';
import ItemCounter from './ItemCounter'


export default function ItemListContainer() {

    const StockAmount = 5;
const [amountProduct, SetAmountToBuy] = useState(1);

    function onAdd(buyingAmount) {
        console.log( `estas comprando ${buyingAmount}`);
    }
   



    return(
        <>

        <ItemCounter onAdd={onAdd} amountProduct={amountProduct} SetAmountToBuy={SetAmountToBuy} StockAmount={StockAmount}/>

        </>
    );
}