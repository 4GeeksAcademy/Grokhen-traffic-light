import React from "react";
import Light from "./light";


const color = ["red", "yellow", "green"]


const TrafficLight = () => {
	return (
		<div className="trafficLight mt-5">
			<Light color = {color[0]}/>
			<Light color = {color[1]}/>
			<Light color = {color[2]}/>
		</div>
	);
};

export default TrafficLight;
