import React from "react";
import ItemCount from "./ItemCount";

const ItenListContainer = (prop) => {

    const onAdd = () => {
        alert("Se agrego al carrito");
    }

    return(
        <>
            <h1 style={style.h1}>{prop.greeting}</h1>
            <ItemCount stock = {12} initial = {0} onAdd = {onAdd} />
        </>
    )
}

const style = {
    h1: {
        gridColumn: '2 / 5'
    }
}

export default ItenListContainer;