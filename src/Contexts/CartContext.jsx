import React, {createContext, useState} from "react";



export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] =useState([]);

    const addToCart = (product) =>{
            setCart([...cart, product]);



        setCart([...cart, product]);}

    const removeFromCart = (id) => {setCart(cart.filter(product => product.sku !== id))}

    const buyAll=() => setCart([]);

    return(
        <>
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll}}>
            {children}
        </CartContext.Provider>
        
        </>
    )
}

export default CartContextProvider;