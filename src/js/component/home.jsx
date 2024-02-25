import React from "react";
import TrafficLight from "./trafficLight";
import RandomButton from "./randomButton";
import MysteryButton from "./mysteryButton";

const Home = () => {
    const onHandleMystery = () => {
        
    }
    return (

        <>
            <TrafficLight />
            <RandomButton />
            <MysteryButton onHandleMystery={onHandleMystery} />
        </>

    )
}

export default Home;