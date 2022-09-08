import React from "react";

const ItenListContainer = (prop) => {
    return(
        <>
            <h1 style={style.h1}>{prop.greeting}</h1>
        </>
    )
}

const style = {
    h1: {
        gridColumn: '2 / 5'
    }
}

export default ItenListContainer;