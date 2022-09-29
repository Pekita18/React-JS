import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ categorias }) => {
    return(
        categorias.map((categoria) => {
            return <Link key={categoria.id} style={styles.link} to={categoria.ruta} >{categoria.name}</Link>
        })
    )
}

const styles = {
    link: {
        color: 'black',
        fontFamily: 'Poppins',
        margin: '0px 20px',
        textDecoration: 'none'
    }
}

export { Nav };