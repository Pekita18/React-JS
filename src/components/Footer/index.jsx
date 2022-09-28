import React from "react";

const Footer = () => {
    return(
        <div style={styles.container}>
            <div>
                <h5>Menu</h5>
                <div style={styles.list}>
                    <a style={styles.a} href="">Inicio</a>
                    <a style={styles.a} href="">Sobre</a>
                    <a style={styles.a} href="">Productos</a>
                    <a style={styles.a} href="">Envios</a>
                </div>
            </div>
            <div>
                <h5>Contacto</h5>
                <div style={styles.list}>
                    <a href="">Telefono</a>
                    <a href="">Email</a>
                    <a href="">Ubicaciones</a>
                    <a href="">Reclamos</a>
                </div>
            </div>
            <div>
                <h5>Social</h5>
                <div>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        gridColumn: '2 / 10',
        display: 'flex',
        justifyContent: 'space-between'
    },

    list: {
        display: 'flex',
        flexDirection: 'column'
    },

    a: {

    }
}

export { Footer }