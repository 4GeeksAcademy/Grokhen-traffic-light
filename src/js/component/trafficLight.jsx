import React, { useState } from "react";
import RedLight from "./redLight";
import YellowLight from "./yellowLight";
import GreenLight from "./greenLight";





const TrafficLight = () => {
	const [red, setRed] = useState("red")
	const [yellow, setYellow] = useState("yellow")
	const [green, setGreen] = useState("green")
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
	return (
		<div className="trafficLight mt-5">
			<RedLight color={red} onHandleBright={onHandleBright} />
			<YellowLight color={yellow} onHandleBright={onHandleBright} />
			<GreenLight color={green} onHandleBright={onHandleBright} />
		</div>
	);
};

export default TrafficLight;
