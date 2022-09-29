import React from "react";
import inicio from '../../img/inicio.png'

const Inicio = () => {
    return(
        <div id="inicio" style={styles.container}>
            <div>
                <h1 style={styles.h1}>Catalogo <br/> Valka.</h1>
                <p style={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste deserunt porro dolores tempore assumenda praesentium dolorum dolor voluptas eveniet.</p>
                <a href="#" style={styles.a}>Iniciar Sesión</a>
            </div>
            <div style={styles.img}>
                <img src={inicio} alt="" />
            </div>
        </div>
    )
}

const styles = {
    container: {
        gridColumn: '2 / 10',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 0rem',
        paddingBottom: '10rem'
    },

    h1: {
        fontSize: '4rem',
        fontWeight: '700',
        fontFamily: 'Poppins',
        letterSpacing: '0.1 rem'
    },

    p: {
        width: '28rem',
        fontFamily: 'Poppins',
        fontSize: '1rem',
        marginTop: '-30px',
        marginBottom: '60px'
    },

    a: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#566981',
        padding: '13px 30px',    
        borderRadius: '10px',
        boxShadow: '0px 0px 5px 1px #3a415a'
    },

    img: {
        marginTop: '50px',
        backgroundColor: '#cbdad5',
        borderRadius: '50%',
        padding: '10px',
    }
}

export { Inicio };