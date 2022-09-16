import React, {useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList"

const baseDatos = [
    {id: 1, title: "Buzo Azul", description: "Este es un buzo de color azul", price: 3000, pictureUrl: "https://via.placeholder.com/150" },
    {id: 2, title: "Buzo Rojo", description: "Este es un buzo de color rojo", price: 3500, pictureUrl: "https://via.placeholder.com/150" },
    {id: 3, title: "Buzo Negro", description: "Este es un buzo de color negro", price: 4000, pictureUrl: "https://via.placeholder.com/150" },
    {id: 4, title: "Buzo Violeta", description: "Este es un buzo de color violeta", price: 2500, pictureUrl: "https://via.placeholder.com/150" }
];

const ItenListContainer = (prop) => {

    const [items, setItems] = useState([]);

    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res(baseDatos);
        }, 2000);
    });

    useEffect(() => {
        promise.then(
            (data) => {
                setItems(data);
            }
        ).catch(() => {
            console.log("Erro en la base de datos.")
        })
    }, []);

    const onAdd = () => {
        alert("Se agrego al carrito");
    }

    return(
        <>
            <h1 style={style.h1}>{prop.greeting}</h1>
            <ItemCount stock = {12} initial = {0} onAdd = {onAdd} />
            <ItemList items = {items}/>
        </>
    )
}

const style = {
    h1: {
        gridColumn: '2 / 5'
    }
}

export default ItenListContainer;