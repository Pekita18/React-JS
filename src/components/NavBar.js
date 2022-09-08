import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header style={style.navBar}>
            <div style={style.logo}>
                <h1>Valka</h1>
            </div>
            <div>
                <ul style={style.options}>
                    <a href="" style={style.a}><li>Inicio</li></a>
                    <a href="" style={style.a}><li>Sobre</li></a>
                    <a href="" style={style.a}><li>Productos</li></a>
                    <a href="" style={style.a}><li>Envios</li></a>
                    <a href="" style={style.a}><li>Contacto</li></a>
                </ul>
            </div>
            <div>
                <CartWidget />
                <i class="fa-regular fa-user" style={style.icons}></i>
            </div>
        </header>
    );
};

const style = {

    navBar: {
        gridColumn: '2 / 10',
        margin: '20px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    logo: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: '0.6rem'

    },

    options: {
        display: 'flex',
        listStyle: 'none'
    },

    a: {
        color: 'black',
        fontFamily: 'Poppins',
        margin: '0px 20px',
        textDecoration: 'none'
    },

    icons: {
        margin: '0px 20px',
        color: 'rgb(141, 141, 141)',
        cursor: 'pointer'
    }

};

export default NavBar
