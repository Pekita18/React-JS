import React from "react";

const Cart = () => {
    return(
        <h1 style={styles.h1}>Estamos en la seccion carrito</h1>
    )
}

const styles = {
    h1: {
        gridColumn: '2 / 10',
        marginTop: '150px'
    }
}

export { Cart };