import React, { createContext } from "react";
import { useState } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        let cantidad = { cantidad: quantity};
        let total = Object.assign(item, cantidad);
        isInCart(total.id) ? añadirCantidad(total.id, quantity) : setCart([...cart, total]);
    }

    const añadirCantidad = (id, cantidad) => {
        setCart(cart.map((producto) => {
            if(producto.id == id){
                producto.cantidad = parseInt(producto.cantidad) + parseInt(cantidad);
            }
            return producto;
        }));
    }

    const removeItem = (itemId) => {
        const eliminarItem = cart.filter((producto) => {
            return producto.id != itemId;
        });
        setCart(eliminarItem)
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(producto => producto.id === id)
    }

    return(
        <Context.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </Context.Provider>
    )
}

export { CartContext }