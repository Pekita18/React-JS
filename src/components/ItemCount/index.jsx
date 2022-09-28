import React, {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial);

    const restar = () => {
        if(cantidad <= 0){
            alert("No se puede quitar mas objetos");
        }else{
            setCantidad(cantidad - 1);
        };
    };

    const sumar = () => {
        if(cantidad >= stock){
            alert("No se puede superar la cantidad del Stock");
        }else{
            setCantidad(cantidad + 1);
        }
    };

    const agregar = () => {
        if(cantidad <= 0){
            alert("Para agregar al carrito necesita un objeto.")
        }else{
            setCantidad(0);
            onAdd();
        }
    }

    return(
        <div style={style.cart}>
            <div style={style.cartContent}>
                <h1 style={style.h1}>Zapatillas Nike</h1>
                <div>
                    <span style={style.stock}>Stock: {stock}</span>
                    <div style={style.carrito}>
                        <button style={style.boton} onClick={restar}>Restar</button>
                        <span>{cantidad}</span>
                        <button style={style.boton} onClick={sumar}>Sumar</button>
                    </div>
                    <button style={style.subir} onClick={agregar}>Agregar</button>
                </div>
            </div>
        </div>
    );
};

const style = {
    cart: {
        gridColumn: '2 / 10',
        marginTop: '1rem',
    },

    cartContent: {
        display: 'inline-block',
        border: '2px solid grey',
        padding: '10px'
    },

    h1: {
        fontSize: '1.2rem',
        textAlign: 'center'
    },

    stock: {
        fontWeight: '600',
        textAlign: 'end',
        margin: '0px 10px'
    },

    carrito: {
        textAlign: 'center',
        fontWeight: '600',  
        margin: '20px 0px'
    },

    boton: {
        margin: '0px 10px',
        background: 'white',
        border: '1px solid',
        borderRadius: '40px',
        padding: '5px',
        cursor: 'pointer'
    },
    
    subir: {
        margin: '0px 10px',
        padding: '5px 40px',
        background: 'white',
        border: '1px solid',
        borderRadius: '40px',
        cursor: 'pointer'
    }

}

export { ItemCount };