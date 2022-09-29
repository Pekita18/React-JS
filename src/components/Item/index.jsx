import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';

const Item = ({item}) => {

    const mostrar = () => {
        document.getElementById(item.id).style.display = 'flex';
    }

    const quitar = () => {
        document.getElementById(item.id).style.display = 'none';
    }

    const [itemId, setItemId] = useState(0)

    const tocar = () => {
        console.log(item.id)
        setItemId(item.id)
    }


    return(
        <NavLink to={itemId} onClick={tocar}>
            <div style={styles.container}>
                <div style={styles.item}>
                    <div onMouseOver={mostrar} onMouseOut={quitar} style={styles.imgs}>
                        <img style={styles.img} src={item.pictureUrl} alt="" />
                        <div id={item.id} style={styles.text}>
                            <h3 style={styles.h3}>{item.title}</h3>
                            <p style={styles.p}>{item.description}</p>
                            <span style={styles.span}>$ {item.price}</span>
                        </div>
                    </div>
                </div>
             </div>
        </NavLink>
    )
}

const styles = {
    container: {
        gridColumn: '2 / 10',
        display: 'flex',
    },
    
    item: {
        marginTop: '50px',
        cursor: 'pointer',
        boxShadow: '0px 0px 5px 1px #cbdad5',
        borderRadius: '40px'
    },

    imgs: {
        backgroundColor: '#cbdad0',
        height: '20rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '40px'
    },

    img: {
        width: '15rem'
    },

    text: {
        textAlign: 'center',
        position: 'absolute',
        display: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height: '20rem',
        width: '15rem',
        borderRadius: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    h3: {
        color: 'white'
    },

    p:{
        color: 'white',
        width: '50%',
        fontSize: '1rem'
    },

    span: {
        color: 'white',
        fontWeight: '600'
    }
}

export { Item };