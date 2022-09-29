import React from "react";

const ItemDetail= ({name, image, parrafo, precio}) => {

    return(
        <div style={styles.container}>
            <img src={image}/>
            <h1>{name}</h1>
            <p>{parrafo}</p>
            <span>{precio}</span>
        </div>  
    )

}

const styles = {
    container: {
        gridColumn: '2 / 10'
    }
}

export { ItemDetail };