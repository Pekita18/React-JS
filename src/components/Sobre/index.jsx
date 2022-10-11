import React from "react";

const Sobre = () => {
    return(
        <div id="sobre" style={styles.container}>
            <span style={styles.top}>#1 TOP EN BUZOS</span>
            <h3 style={styles.h3}>Sobre la Tienda Valka</h3>
            <div style={styles.cards}>
                <div>
                    <i style={styles.i} className="fa-sharp fa-solid fa-truck"></i>
                    <h5 style={styles.h5}>Envio Gratis</h5>
                    <p style={styles.p}>Lorem ipsum dolor sit.</p>
                </div>
                <div>
                    <i style={styles.i1} className="fa-regular fa-money-bill-1"></i>
                    <h5 style={styles.h5}>Ofertas Unicas</h5>
                    <p style={styles.p}>Lorem ipsum dolor sit.</p>
                </div>
                <div>
                    <i style={styles.i2} className="fa-solid fa-shirt"></i>
                    <h5 style={styles.h5}>Calidad Original</h5>
                    <p style={styles.p}>Lorem ipsum dolor sit.</p>
                </div>
                <div>
                    <i style={styles.i3} className="fa-sharp fa-solid fa-credit-card"></i>
                    <h5 style={styles.h5}>Medios de Pago</h5>
                    <p style={styles.p}>Lorem ipsum dolor sit.</p>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container:{
        marginTop: '30px',
        gridColumn: '2 / 10',
        textAlign: 'center',
        marginBottom: '50px',
        fontFamily: 'Poppins'
    },

    top: {
        color: '#89a7b1',
        fontWeight: '600',
        fontSize: '0.8rem'
    },

    h3: {
        marginTop: '0px',
        fontWeight: '700',
        fontSize: '2.3rem'    
    },
    
    cards: {
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'space-around',
        alingItems: 'center',
    },

    i: {
        fontSize: '2rem',
        color: '#ffc978',
        boxShadow: '0px 0px 5px 1px #ffc978',
        padding: '20px',
        borderRadius: '20px'
    },

    i1: {
        fontSize: '2rem',
        color: '#5e8271',
        boxShadow: '0px 0px 5px 1px #5e8271',
        padding: '20px',
        borderRadius: '20px'
    },

    i2: {
        fontSize: '2rem',
        color: '#b31237',
        boxShadow: '0px 0px 5px 1px #b31237',
        padding: '20px',
        borderRadius: '20px'
    },

    i3: {
        fontSize: '2rem',
        color: '#3a415a',
        boxShadow: '0px 0px 5px 1px #3a415a',
        padding: '20px',
        borderRadius: '20px'
    },

    h5: {
        marginTop: '20px',
        fontSize: '1.2rem'
    },

    p: {
        marginTop: '-20px',
        fontSize: '0.7rem'
    }
}

export { Sobre };