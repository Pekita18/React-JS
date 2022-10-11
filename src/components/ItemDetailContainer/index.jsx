import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { ItemDetail } from "../ItemDetail";
import { db } from  "../../firebase/firebase.js";
import { getDocs, collection } from "firebase/firestore"

const ItemDetailContainer = ({prop}) => {

    let { ProductoId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const producsCollection = collection(db, 'products');
        getDocs(producsCollection)
        .then((data) => {
            const listProducts = data.docs.map((list) => {
                return{...list.data(), id: list.id, ruta: `producto/${list.id}`}
            });
            setItems(listProducts)
        })
    }, []);
    
    let mostrar = items.filter(prod => prod.id == ProductoId);

    return(
        <>
            {mostrar.map((item) => <ItemDetail produc = {item} key = {item.id}/>)}
        </>
    )
}

export { ItemDetailContainer };