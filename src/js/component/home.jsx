import React, { useState } from "react";
import RedLight from "./redLight";
import YellowLight from "./yellowLight";
import GreenLight from "./greenLight";
import RandomButton from "./randomButton";
import MysteryButton from "./mysteryButton";

const Home = () => {

    const [red, setRed] = useState("red");
	const [yellow, setYellow] = useState("yellow");
	const [green, setGreen] = useState("green");

	const onHandleMystery = () => {
		setGreen("mysteryColor" + " " + "bright");
        setYellow("mysteryColor" + " " + "bright");
        setRed("mysteryColor" + " " + "bright");
	}


    const onHandleBright = (color) => {
        if (color === red) {
            setGreen("green");
            setYellow("yellow");
            setRed("red" + " " + "bright")
        } else if (color === yellow) {
            setGreen("green");
            setYellow("yellow" + " " + "bright");
            setRed("red");
        } else {
            setGreen("green" + " " + "bright");
            setYellow("yellow");
            setRed("red");
        }
    }

    const onHandleRandom = () => {
        const colors = ["red", "yellow", "green"];
        onHandleBright(colors[Math.floor(Math.random() * 3)]);
    }

    return (

        <>
            <div className="trafficLight mt-5">
                <RedLight color={red} onHandleBright={onHandleBright} />
                <YellowLight color={yellow} onHandleBright={onHandleBright} />
                <GreenLight color={green} onHandleBright={onHandleBright} />
            </div>
            <RandomButton onHandleRandom={onHandleRandom}/>
            <MysteryButton onHandleMystery={onHandleMystery} />
        </>

    );
}

export default Home;