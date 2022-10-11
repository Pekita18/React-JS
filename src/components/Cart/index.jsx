import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../CartContext";
import './Cart.css';

const Cart = () => {
    const lodash = require('lodash');
    const { cart ,clear, removeItem } = useContext(Context);

    const objCantidades = cart.map((producto) => {
        return parseInt(producto.cantidad);
    });

    let total = lodash.sum(objCantidades);

    const arrPrecios = cart.map((producto) => {
        return parseInt(producto.price) * parseInt(producto.cantidad);
    });

    let precioFinal = lodash.sum(arrPrecios);

    const precioTotal = (precio, camtidad) => {
        return precio * camtidad;
    }

    if(cart.length === 0) {
        return (
            <div style={styles.container}>
                <h1 style={styles.h1}>No hay productos en el carrito.</h1>
                <Link to="/" style={styles.btn}>Ver Productos</Link>
            </div>
        )
    }

    return(
        <div style={styles.container}>
            <div style={styles.left}>
                <div style={styles.top}>
                    <h4 style={styles.h4}>Tu Carrito</h4>
                    <h4 style={styles.h4}>{cart.length} Productos</h4>
                </div>
                <div style={styles.opt}>
                    <h5 style={styles.h51}>PRODUCTOS</h5>
                    <h5 style={styles.h5}>CANTIDAD</h5>
                    <h5 style={styles.h52}>PRECIO</h5>
                    <h5 style={styles.h5}>TOTAL</h5>
                </div>
                {cart.map((producto) => {
                    return(
                        <div key={producto.id} style={styles.prod}>
                            <div style={styles.produc}>
                                <img src={producto.pictureUrl} alt={producto.name} style={styles.img} />
                                <div style={styles.des}>
                                    <h6 style={styles.h6}>{producto.title}</h6>
                                    <span style={styles.cat}>{producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}</span>
                                    <button style={styles.btn} onClick={() => removeItem(producto.id)}>Eliminar</button>
                                </div>
                            </div>
                            <div style={styles.cant}>
                                <span style={styles.cantid}>{producto.cantidad}</span>
                            </div>
                            <div style={styles.price}>
                                <span>${producto.price}</span>
                            </div>
                            <div style={styles.total}>
                                <span style={styles.span}>${precioTotal(producto.price, producto.cantidad)}</span>
                            </div>
                        </div>
                    )
                })}
                <div style={styles.bottom}>
                    <Link to={'/'} style={styles.atra}><span style={styles.atras}><i className="fa-solid fa-arrow-left"></i> Continuar Comprando</span></Link>
                    <button style={styles.borrar} onClick={clear}>Borrar Todo</button>
                </div>
            </div>
            <div style={styles.right}>
                <h4 style={styles.h4}>Orden</h4>
                <div style={styles.items}>
                    <h4 style={styles.subh4}>{cart.length} Productos</h4>
                    <h4 style={styles.subh4}>${precioFinal}</h4>
                </div>
                <div>
                    <h5 style={styles.envios}>Envios</h5>
                    <div className="select" tabIndex="1">
                        <input className="selectopt" name="test" type="radio" id="opt1" checked/>
                        <label htmlFor="opt1" className="option">Envios Estandar - $ 1100</label>
                        <input className="selectopt" name="test" type="radio" id="opt2"/>
                        <label htmlFor="opt2" className="option">Envio Express - $1900</label>
                    </div>
                </div>
                <div>
                    <h5 style={styles.envios}>Codigo de Descuento</h5>
                    <div style={styles.cod}>
                        <input style={styles.int} type="text" placeholder="Introducir tu Codigo"/>
                        <button style={styles.btnInt}>Aplicar</button>
                    </div>
                </div>
                <div style={styles.fin}>
                    <h5 style={styles.h5f}>PRECIO FINAL</h5>
                    <h5 style={styles.h5f}>${precioFinal}</h5>
                </div>
                <button style={styles.comp}>COMPRAR</button>
            </div>
        </div>
    )
}

const styles = {
    container: {
        gridColumn: '2 / 10',
        marginTop: '150px',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, %10)',
        backgroundColor: '#f5f5f6',
        fontFamily: 'Poppins'
    },

    left: {
        gridColumn: '2 / 8',
        backgroundColor: '#f5f5f6',
        padding: '50px 0px',
        marginRight: '30px'
    },

    top: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    h4: {
        fontSize: '1.8rem',
        fontWeight: '700'
    },

    opt: {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid rgb(185, 185, 185)'
    },

    h5: {
        color: 'rgb(138, 136, 136)',
        fontSize: '0.7rem',
        marginTop: '40px'
    },

    h51: {
        color: 'rgb(138, 136, 136)',
        fontSize: '0.7rem',
        marginTop: '40px',
        marginRight: '145px'
    },

    h52: {
        color: 'rgb(138, 136, 136)',
        fontSize: '0.7rem',
        marginTop: '40px',
        marginRight: '15px'
    },

    prod: {
        display: 'grid',
        gridTemplateColumns: 'repeat(10, %10)',
        margin: '50px 0px'
    },

    produc: {
        gridColumn: '1 / 3',
        display: 'flex',
        width: '230px'
    },

    des: {
        display: 'flex',
        flexDirection: 'column'
    },

    h6: {
        margin: '0px 20px',
        fontSize: '0.9rem',
        fontWeight: '600'
    },

    cat: {
        margin: '15px 20px',
        fontSize: '0.7rem',
        fontWeight: '400',
        color: '#0083ce'
    },

    btn: {
        margin: '0px 20px',
        padding: '0px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        textAlign: 'start',
        width: '50px',
        color: '#8a8888',
        fontSize: '0.7rem',
    },

    img: {
        width: '5rem',
        height: '5rem',
        backgroundColor: '#cbdad0',
        padding: '5px'
    },  

    cant: {
        gridColumn: '4 / 5',
        fontWeight: '600',
        fontSize: '0.8rem',
    },

    price: {
        gridColumn: '7 / 8',
        fontWeight: '600',
        fontSize: '0.8rem',
    },

    total: {
        gridColumn: '9 / 10',
        textAlign: 'end',
        fontWeight: '600',
        fontSize: '0.8rem'
    },

    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '50px'
    },

    atras: {
        color: '#0083ce',
        fontSize: '0.7rem',
        cursor: 'pointer',
    },

    atra: {
        textDecoration: 'none'
    },

    borrar: {
        padding: '5px 12px',
        backgroundColor: '#c1c1c1',
        borderRadius: '40px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '400',
        fontFamily: 'Poppins'
    },

    right: {
        gridColumn: '9 / 10',
        marginLeft: '50px',
        backgroundColor: '#e5e6ea',
        padding: '50px 50px',
    },

    items: {
        borderTop: '1px solid rgb(185, 185, 185)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    subh4: {
        color: '#777778',
        fontSize: '1rem',
        marginTop: '40px'
    },

    envios: {
        fontWeight: '600',
        fontSize: '1.1rem',
        color: 'black',
        marginTop: '35px'
    },

    cod: {
        display: 'flex',
        flexDirection: 'column'
    },

    int: {
        width: '270px',
        padding: '10px 15px',
        fontSize: '0.8rem',
        fontFamily: 'Poppins',
        fontWeight: '600'
    },

    btnInt: {
        marginTop: '30px',
        width: '100px',
        border: 'none',
        backgroundColor: '#fa7474',
        color: 'white',
        fontFamily: 'Poppins',
        fontWeight: '600',
        padding: '10px 20px',
        cursor: 'pointer'
    },

    fin: {
        borderTop: '1px solid rgb(185, 185, 185)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '40px'
    },

    h5f: {
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#7d7d7d'
    },

    comp: {
        width: '100%',
        padding: '12px 0px',
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: 'white',
        border: 'none',
        backgroundColor: '#0083ce',
        cursor: 'pointer'
    },

}

export { Cart };