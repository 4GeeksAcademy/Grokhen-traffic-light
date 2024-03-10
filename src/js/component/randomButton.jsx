import React from "react";

const RandomButton = ({onHandleRandom}) => {
    return(
        <button type="button" className="randomButton mt-4" onClick={()=> onHandleRandom()}>Cambiar de color</button>
    )
}

export default RandomButton;