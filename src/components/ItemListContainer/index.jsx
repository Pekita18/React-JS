import React, {useEffect, useState} from "react";
import { ItemList } from "../ItemList";
import { Inicio  } from "../Inicio";
import { Sobre } from "../Sobre";
import buzoBlanco from '../../img/buzoBlanco.png'
import buzoNegro from '../../img/buzoNegro.png'
import buzoRosa from '../../img/buzoRosa.png'
import buzoMarron from '../../img/buzoMarron.png'
import buzoAzulN from '../../img/buzoAzulN.png'
import buzoBlancoH from '../../img/buzoBlancoH.png'
import buzoGrisH from '../../img/buzoGrisH.png'
import buzoNarajanjaN from '../../img/buzoNaranjaN.png'
import buzoNegroN from '../../img/buzoNegroN.png'
import buzoRojoH from '../../img/buzoRojoH.png'
import buzoVerdeH from '../../img/buzoVerdeH.png'
import buzoVIoletaN from '../../img/buzoVioletaN.png'

const baseDatos = [
    {id: 1, title: "Valka Blanco", description: "Este es un buzo de color blanco", price: 3000, pictureUrl: buzoBlanco, categoria: 'mujer' },
    {id: 2, title: "Valka Marron", description: "Este es un buzo de color rojo", price: 3500, pictureUrl: buzoMarron, categoria: 'mujer' },
    {id: 3, title: "Valka Negro", description: "Este es un buzo de color negro", price: 4000, pictureUrl: buzoNegro, categoria: 'mujer' },
    {id: 4, title: "Valka Rosa", description: "Este es un buzo de color rosa", price: 2500, pictureUrl: buzoRosa, categoria: 'mujer' },
    {id: 5, title: "Valka Blanco", description: "Este es un buzo de color blanco", price: 2500, pictureUrl: buzoBlancoH, categoria: 'hombre' },
    {id: 6, title: "Valka Gris", description: "Este es un buzo de color gris", price: 2500, pictureUrl: buzoGrisH, categoria: 'hombre' },
    {id: 7, title: "Valka Verde", description: "Este es un buzo de color negro", price: 2500, pictureUrl: buzoVerdeH, categoria: 'hombre' },
    {id: 8, title: "Valka Rojo", description: "Este es un buzo de color rojo", price: 2500, pictureUrl: buzoRojoH, categoria: 'hombre' },
    {id: 9, title: "Valka Azul", description: "Este es un buzo de color azul para niños.", price: 2500, pictureUrl: buzoAzulN, categoria: 'niños' },
    {id: 10, title: "Valka Naranja", description: "Este es un buzo de color naranaja para niños", price: 2500, pictureUrl: buzoNarajanjaN, categoria: 'niños' },
    {id: 11, title: "Valka Negro", description: "Este es un buzo de color negro para niños", price: 2500, pictureUrl: buzoNegroN, categoria: 'niños' },
    {id: 12, title: "Valka Violeta", description: "Este es un buzo de color violeta para niños", price: 2500, pictureUrl: buzoVIoletaN, categoria: 'niños' },
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
        </>
    )
}

export { ItenListContainer };