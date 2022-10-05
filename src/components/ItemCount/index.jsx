import React, {useRef} from 'react';

const ItemCount = ({stock, initial, recibirCantidad}) => {

    const cantidad = useRef(initial);   

    const agregar = () => {
        let valor = cantidad.current.value;
        let container = document.getElementById('container');

        const correcto = () => {
            container.innerHTML = '';
            recibirCantidad(valor, 'Se agregro al carrito', '');
        }

        const menos = () => {
            valor > 0 ? correcto() : recibirCantidad(valor, '', 'No es un dato valido.')
        }
 
        const vereficar = () => {
            parseInt(valor) > parseInt(stock) ? recibirCantidad(valor, '', 'No hay stock.') : menos();
        }

        isNaN(valor) ? recibirCantidad(valor, '', 'No son caracteres validos.') : vereficar();

    }

    return(
        <div style={style.cart}>
            <div id='container'>
                <input type="text" ref={cantidad} defaultValue={initial} itemID='cant' style={style.cantidad}/>
                <button style={style.subir} onClick={agregar}>Agregar</button>
            </div>
        </div>
    );
};

const style = {
    cart: {
        gridColumn: '2 / 10',
        marginTop: '1rem',
    },

    cantidad: {
        fontFamily: 'Poppins',
        fontSize: '0.8rem',
        color: 'rgb(67, 168, 101)',
        textAlign: 'center',
        width: '33px',
        height: '35px',
        border: '1px solid #d1d1d1'
    },

    subir: {
        color: 'white',
        fontWeight: '600',
        backgroundColor: 'rgb(153, 153, 153)',
        padding: '13px 50px',    
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '30px',
        marginLeft: '30px',
    },

}

export { ItemCount };