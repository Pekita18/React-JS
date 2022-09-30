import React from "react";
import { CartWidget } from "../CartWidget";
import { Nav } from "./Nav";

const NavBar = () => {

    const categorias = [
        { id: 1, name: 'Inicio', ruta: '/'},
        { id: 2, name: 'Sobre', ruta: '#sobre'},
        { id: 3, name: 'Productos', ruta: '#productos'},
        { id: 4, name: 'Mujer', ruta: 'categoria/mujer'},
        { id: 5, name: 'Hombre', ruta: 'categoria/hombre'},
        { id: 6, name: 'Niños', ruta: 'categoria/niños'},
    ]

    return (
        <header style={style.navBar}>
            <div style={style.logo}>
                <h1>Valka</h1>
            </div>
            <div>
                <div style={style.a}>
                    <Nav categorias = {categorias} />
                </div>
            </div>
            <div>
                <CartWidget />
                <i className="fa-regular fa-user" style={style.icons}></i>
            </div>
        </header>
    );
};

const style = {

    navBar: {
        gridColumn: '2 / 10',
        marginLeft: '130px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
        position: 'fixed',
        top: '0',
        width: '80%',
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

export { NavBar };
