import React, { useContext } from "react";
import { Context } from "../CartContext";

const Cart = () => {
    const { cart ,clear, removeItem } = useContext(Context)

    return(
        <>
            <h1 style={styles.h1}>Estamos en la seccion carrito</h1>
            <button onClick={removeItem(6)} style={styles.btn}>Borrar Este</button>
            <button onClick={clear} style={styles.btn}>Borrar Todo</button>
        </>
    )
}

const styles = {
    h1: {
        gridColumn: '2 / 10',
        marginTop: '150px'
    },
    btn: {
        gridColumn: '2 / 2',
        padding: '10px',
    }
}

export { Cart };