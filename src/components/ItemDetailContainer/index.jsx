import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { ItemDetail } from "../ItemDetail";
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

const ItemDetailContainer = ({prop}) => {

    const baseDatos = [
        {id: 1, title: "Valka Blanco", description: "Este es un buzo de color blanco", price: 3000, pictureUrl: buzoBlanco, categoria: 'mujer', stock:'30'},
        {id: 2, title: "Valka Marron", description: "Este es un buzo de color rojo", price: 3500, pictureUrl: buzoMarron, categoria: 'mujer', stock:'30' },
        {id: 3, title: "Valka Negro", description: "Este es un buzo de color negro", price: 4000, pictureUrl: buzoNegro, categoria: 'mujer', stock:'30' },
        {id: 4, title: "Puff Faiter", description: "Este es un buzo de color rosa", price: 2500, pictureUrl: buzoRosa, categoria: 'mujer', stock:'30' },
        {id: 5, title: "Valka Blanco", description: "Este es un buzo de color blanco", price: 2500, pictureUrl: buzoBlancoH, categoria: 'hombre', stock:'30' },
        {id: 6, title: "Valka Gris", description: "Este es un buzo de color gris", price: 2500, pictureUrl: buzoGrisH, categoria: 'hombre', stock:'30' },
        {id: 7, title: "Valka Verde", description: "Este es un buzo de color negro", price: 2500, pictureUrl: buzoVerdeH, categoria: 'hombre', stock:'30' },
        {id: 8, title: "Valka Rojo", description: "Este es un buzo de color rojo", price: 2500, pictureUrl: buzoRojoH, categoria: 'hombre', stock:'30' },
        {id: 9, title: "Valka Azul", description: "Este es un buzo de color azul para niños.", price: 2500, pictureUrl: buzoAzulN, categoria: 'niños', stock:'30' },
        {id: 10, title: "Valka Naranja", description: "Este es un buzo de color naranaja para niños", price: 2500, pictureUrl: buzoNarajanjaN, categoria: 'niños', stock:'30' },
        {id: 11, title: "Valka Negro", description: "Este es un buzo de color negro para niños", price: 2500, pictureUrl: buzoNegroN, categoria: 'niños', stock:'30' },
        {id: 12, title: "Valka Violeta", description: "Este es un buzo de color violeta para niños", price: 2500, pictureUrl: buzoVIoletaN, categoria: 'niños', stock:'30' },
    ];

    let { ProductoId } = useParams();
    
    let mostrar = baseDatos.filter(prod => prod.id == ProductoId);

    return(
        <>
            {mostrar.map((item) => <ItemDetail produc = {item} key = {item.id}/>)}
        </>
    )
}

export { ItemDetailContainer };