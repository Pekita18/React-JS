import React from "react";

const ItemDetail= ({produc}) => {

    let cate = produc.categoria.charAt(0).toUpperCase() + produc.categoria.slice(1);

    return(
        <div style={styles.container}>
            <div style={styles.left}>
                <img style={styles.img} src={produc.pictureUrl} alt="" />
            </div>
            <div style={styles.right}>
                <h1 style={styles.h1}>{produc.title}</h1>
                <span style={styles.span}>{cate}</span>
                <div style={styles.star}>
                    <i style={styles.i} class="fa-solid fa-star"></i>
                    <i style={styles.i} class="fa-solid fa-star"></i>
                    <i style={styles.i} class="fa-solid fa-star"></i>
                    <i style={styles.i} class="fa-solid fa-star"></i>
                    <i style={styles.fin} class="fa-solid fa-star-half-stroke"></i>
                    <span style={styles.comen}>5 Comentarios</span>
                </div>
                <h3 style={styles.h3}>Calidad Exclusiva</h3>
                <p style={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla cupiditate, tenetur fuga pariatur blanditiis sed ab doloribus, distinctio nesciunt impedit porro quasi voluptates excepturi quaerat saepe neque quibusdam quas!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla cupiditate, tenetur fuga pariatur blanditiis sed ab doloribus, distinctio nesciunt impedit porro quasi voluptates excepturi quaerat saepe neque quibusdam quas!</p>
                <button style={styles.btn}>Comprar</button>
            </div>
        </div>  
    )

}

const styles = {
    container: {
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
        backgroundColor: '#130910',
        padding: '13px 50px',    
        borderRadius: '10px',
        boxShadow: '0px 0px 5px 1px #130912',
        border: 'none',
        cursor: 'pointer',
        marginTop: '30px'
    }
}

export { ItemDetail };