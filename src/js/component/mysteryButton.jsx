import React from "react";

const MysteryButton = (onHandleMystery) => {
    return(
        <button type="button" className="mysteryButton mt-2" onClick={()=> onHandleMystery}>No pulsar</button>
    )
}

export default MysteryButton;