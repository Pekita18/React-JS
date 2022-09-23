import React, {useState} from 'react';
import Item from './Item'

const ItemList = ({items}) => {

    return(
        <div style={style.items}>
            {items.map((item) => <Item item = {item}/>)}
        </div>
    )
}

const style = {
    items: {
        gridColumn: '2 / 10',
        display: 'flex'
    }
}

export default ItemList;