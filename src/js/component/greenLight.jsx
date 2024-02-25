import React from "react";


const GreenLight = ({color, onHandleBright}) => {
    return (

        <div className={color} onClick={() => onHandleBright(color)}>
        </div>

    )
}

export default GreenLight;