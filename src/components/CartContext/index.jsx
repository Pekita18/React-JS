import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {

    const [cart, setCart] = useState('');

    /* useEffect(() => {
        window.localStorage.setItem('productos', JSON.stringify(cart))
    }, [cart]);
    */

    const addItem = (item, quantity) => {
        isInCart(item.id)
        setCart([{item, quantity}])
    }

    const removeItem = (itemId) => {
        console.log('elimina el item')
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        console.log(id)
        console.log(cart[0].item.id)
    }

    return(
        <Context.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </Context.Provider>
    )
}

export { CartContext }