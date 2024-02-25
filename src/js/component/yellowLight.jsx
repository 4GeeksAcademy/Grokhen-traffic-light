import React from "react";


const YellowLight = ({color, onHandleBright}) => {
    return (

        <div className={color} onClick={() => onHandleBright(color)}>
        </div>

    )
}

export default YellowLight;