import React from "react";


const RedLight = ({color, onHandleBright}) => {
    return (

        <div className={color} onClick={() => onHandleBright(color)}>
        </div>

    )
}

export default RedLight;