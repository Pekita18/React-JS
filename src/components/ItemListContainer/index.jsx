import React, {useEffect, useState} from "react";
import { ItemList } from "../ItemList";
import { Inicio  } from "../Inicio";
import { Sobre } from "../Sobre";
import buzoBlanco from '../../img/buzoBlanco.png'
import buzoNegro from '../../img/buzoNegro.png'
import buzoRosa from '../../img/buzoRosa.png'
import buzoMarron from '../../img/buzoMarron.png'
import { Footer } from "../Footer";

const baseDatos = [
    {id: 1, title: "Valka Blanco", description: "Este es un buzo de color blanco", price: 3000, pictureUrl: buzoBlanco },
    {id: 2, title: "Valka Marron", description: "Este es un buzo de color rojo", price: 3500, pictureUrl: buzoMarron },
    {id: 3, title: "Valka Negro", description: "Este es un buzo de color negro", price: 4000, pictureUrl: buzoNegro },
    {id: 4, title: "Valka Rosa", description: "Este es un buzo de color violeta", price: 2500, pictureUrl: buzoRosa }
];

const ItenListContainer = () => {

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
            <Inicio />
            <Sobre />
            <ItemList items = {items} />
            <Footer />
        </>
    )
}

export { ItenListContainer };