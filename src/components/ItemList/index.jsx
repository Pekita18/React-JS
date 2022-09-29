import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../Item'

const ItemList = ({items}) => {

    let { ProductoId } = useParams();
    console.log(ProductoId)

    const [cate, setCate] = useState([])

    useEffect(() => {
        let cate = items.filter(categ => categ.categoria == ProductoId);
        setCate(cate)
    }, [ProductoId])

    return(
        <div id='productos' style={style.container}>
            <h3 style={style.h3}>Los buzos mas vendidos</h3>
            <div style={style.items}>
                {cate.map((item) => <Item item = {item} key = {item.id}/>)}
             </div>
             <a href="" style={style.a}>Ver Mas</a>
        </div>
    )
}

const style = {
    container: {
        marginTop: '100px',
        gridColumn: '2 / 10',
        textAlign: 'center',  
    },

    h3: {
        fontWeight: '700',
        fontSize: '2.3rem'
    },

    items: {
        gridColumn: '2 / 10',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '100px',
    },

    a: {
        textAlign: 'center',
        textDecoration: 'none',
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#566981',
        padding: '10px 25px',    
        borderRadius: '10px',
        boxShadow: '0px 0px 5px 1px #3a415a'
    }
}

export { ItemList };