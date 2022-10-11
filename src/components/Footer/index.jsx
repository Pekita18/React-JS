import React from "react";

const Footer = () => {
    return(
        <div id="footer" style={styles.container}>
            <div>
                <h5 style={styles.h5}>Menu</h5>
                <div style={styles.list}>
                    <a style={styles.a} href="">Inicio</a>
                    <a style={styles.a} href="">Sobre</a>
                    <a style={styles.a} href="">Productos</a>
                    <a style={styles.a} href="">Envios</a>
                </div>
            </div>
            <div>
                <h5 style={styles.h5}>Contacto</h5>
                <div style={styles.list}>
                    <a style={styles.a} href="">Telefono</a>
                    <a style={styles.a} href="">Email</a>
                    <a style={styles.a} href="">Ubicaciones</a>
                    <a style={styles.a} href="">Reclamos</a>
                </div>
            </div>
            <div>
                <h5 style={styles.h5}>Social</h5>
                <div>
                    <i style={styles.i} className="fa-brands fa-instagram"></i>
                    <i style={styles.i} className="fa-brands fa-facebook"></i>
                    <i style={styles.i} className="fa-brands fa-whatsapp"></i>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        gridColumn: '2 / 10',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '100px 0px',
        fontFamily: 'Poppins'
    },

    list: {
        display: 'flex',
        flexDirection: 'column'
    },

    h5: {
        fontSize: '1.3rem'
    },

    a: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '1rem',
        margin: '5px 0px'
    },

    i: {
        marginRight: '20px',
        fontSize: '1.2rem',
        cursor: 'pointer'
    }
}

export { Footer }