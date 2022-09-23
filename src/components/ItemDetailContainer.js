import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();

    const fetchApi = async () => {
        fetch('https://rickandmortyapi.com/api/character/74')
        .then(res => res.json())
        .then(json => setProduct(json))
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, similique dicta assumenda rerum illo optio, voluptatem libero ipsum esse harum quaerat, ipsa debitis quae necessitatibus ea molestias! Veritatis, laborum officiis!";

    const precio = "$ 1800"

    return(
        <ItemDetail name={product.name} image={product.image} parrafo={parrafo} precio={precio}/>
    )

}

export default ItemDetailContainer;