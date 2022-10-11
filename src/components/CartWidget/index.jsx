import React, { useContext, useEffect } from "react";
import { Context } from "../CartContext";

const CartWidget = () => {
    const lodash = require('lodash');
    const { cart } = useContext(Context);

    const objCantidades = cart.map((producto) => {
        return parseInt(producto.cantidad);
    });

    let total = lodash.sum(objCantidades);

    useEffect(() => {
        parseInt(total) >= 1 ? document.getElementById('ca').style.display = 'inline-flex' : document.getElementById('ca').style.display = 'none';
    }, [total])

    return(
        <div id="ca" style={styles.cont}>
            <i className="fa-solid fa-cart-shopping" style={styles.icons}></i>
            <span style={styles.num}>{total}</span>
        </div>
    );
};

const styles = {
    cont: {
        display: 'flex',
        alignItems: 'center',
        margin: '0px 20px',
        padding: '2px 15px'
    },

    icons: {
        color: 'rgb(141, 141, 141)',
        cursor: 'pointer',
    },

    num: {
        marginLeft: '10px',
        color: 'rgb(141, 141, 141)',
        fontWeight: '700'
    }
};


export { CartWidget };