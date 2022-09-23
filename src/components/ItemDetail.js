import React from "react";

const ItemDetail= ({name, image, parrafo, precio}) => {

    return(
        <div>
            <img src={image}/>
            <h1>{name}</h1>
            <p>{parrafo}</p>
            <span>{precio}</span>
        </div>  
    )

}

export default ItemDetail;