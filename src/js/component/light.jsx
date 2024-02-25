import React from "react";


const Light = ({color, onHandleBright}) => {
    return (

        <div className={color} onClick={onHandleBright(color)}>
        </div>

    )
}

export default Light;