import React from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../CartContext";
import {ItemCount} from "../ItemCount"

const ItemDetail= ({produc}) => {
    let cate = produc.categoria.charAt(0).toUpperCase() + produc.categoria.slice(1);
    const { addItem } = useContext(Context)

    const siEs = (si) => {
        addItem(produc, si)
        document.getElementById('cart').style.display = "block";
    }

    const recibirCantidad = (val, correc, incorrec) => {
        let inlerta = document.getElementById('inlert');
        let alerta = document.getElementById('alert');

        alerta.innerHTML = correc;
        inlerta.innerHTML = incorrec;

        incorrec == '' ? siEs(val) : console.log('No es numero valido.');
    }

    return(
        <div style={styles.container}>
            <div style={styles.left}>
                <img style={styles.img} src={produc.pictureUrl} alt="" />
            </div>
            <div style={styles.right}>
                <h1 style={styles.h1}>{produc.title}</h1>
                <span style={styles.span}>{cate}</span>
                <div style={styles.star}>
                    <i style={styles.i} className="fa-solid fa-star"></i>
                    <i style={styles.i} className="fa-solid fa-star"></i>
                    <i style={styles.i} className="fa-solid fa-star"></i>
                    <i style={styles.i} className="fa-solid fa-star"></i>
                    <i style={styles.fin} className="fa-solid fa-star-half-stroke"></i>
                    <span style={styles.comen}>5 Comentarios</span>
                </div>
                <h3 style={styles.h3}>Calidad Exclusiva</h3>
                <p style={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla cupiditate, tenetur fuga pariatur blanditiis sed ab doloribus, distinctio nesciunt impedit porro quasi voluptates excepturi quaerat saepe neque quibusdam quas!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla cupiditate, tenetur fuga pariatur blanditiis sed ab doloribus, distinctio nesciunt impedit porro quasi voluptates excepturi quaerat saepe neque quibusdam quas!</p>
                <p id='inlert' style={styles.incorrecto}></p>
                <p id='alert' style={styles.correcto}></p>
                <ItemCount stock={produc.stock} initial={1} recibirCantidad={recibirCantidad} />
                <Link to='/cart' id="cart" style={styles.cart}><button style={styles.btn}> Finalizar Compra</button></Link>
            </div>
        </div>  
    )

}

const styles = {
    container: {
        fontFamily: 'Poppins',
        gridColumn: '2 / 10',
        display: 'flex',
        marginTop: '150px'
    },

    left: {
        backgroundColor: '#cbdad0',
        padding: '2rem',
        margin: '20px 50px 0px 100px'
    },

    img: {
        width: '25rem'
    },

    right: {
        width: '25rem'
    },

    h1: {
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '1.6rem',
        marginBottom: '8px'
    },

    span: {
        fontWeight: '600',
        fontStyle: 'italic',
        fontSize: '1.2rem'
    },

    star: {
        marginTop: '10px'
    },

    i: {
        fontSize: '0.8rem'
    },

    fin: {
        fontSize: '0.8rem',
        marginRight: '20px'
    },

    comen: {
        fontSize: '0.8rem',
        cursor: 'pointer'
    },

    h3: {
        fontSize: '1rem',
        fontWeight: '700',
        marginTop: '40px',
        marginBottom: '-5px'
    },

    p: {
        fontSize: '0.9rem',
        textAlign: 'justify'
    },

    btn: {
        color: 'white',
        fontWeight: '600',
        backgroundColor: 'rgb(110, 110, 110)',
        padding: '13px 50px',    
        borderRadius: '10px',
        boxShadow: '0px 0px 5px 1px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '30px'
    },

    correcto: {
        color: 'rgb(104, 166, 125)',
        fontSize: '0.9rem'
    },

    incorrecto: {
        color: 'red',
        fontSize: '0.9rem'
    },

    cart: {
        display: 'none'
    }
}

export { ItemDetail };