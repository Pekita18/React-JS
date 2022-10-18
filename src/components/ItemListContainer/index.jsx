import React, {useEffect, useState} from "react";
import { ItemList } from "../ItemList";
import { Inicio  } from "../Inicio";
import { Sobre } from "../Sobre";
import { db } from  "../../firebase/firebase.js";
import { getDocs, collection, query, whuere, where } from "firebase/firestore"

const ItenListContainer = () => {

    const [items, setItems] = useState([]);

    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res(items);
        }, 1000);
    });

    useEffect(() => {
        const producsCollection = collection(db, 'products');
        getDocs(producsCollection)
        .then((data) => {
            const listProducts = data.docs.map((list) => {
                return{...list.data(), id: list.id, ruta: `/producto/${list.id}`}
            });
            setItems(listProducts)
        })
    }, []);

    return(
        <>
            <Inicio />
            <Sobre />
            <ItemList items = {items} />
        </>
    )
}

export { ItenListContainer };