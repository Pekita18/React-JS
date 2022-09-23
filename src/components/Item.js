import React from "react";

const Item = ({item}) => {
    return(
        <div style={style.item}>
            <h3>{item.title}</h3>
            <img src={item.pictureUrl} alt="" />
            <p style={style.p}>{item.description}</p>
            <span>$ {item.price}</span>
        </div>
    )
}

const style = {
    item: {
        marginTop: '5px',
        cursor: 'pointer',
        marginLeft: '20px',
    },

    p:{
        width: '150px'
    }
}

export default Item;