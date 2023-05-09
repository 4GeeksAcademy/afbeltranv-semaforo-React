import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [glowRojo, setGlowRojo]=useState("");
	const [glowAmarillo, setGlowAmarillo]=useState("");
	const [glowVerde, setGlowVerde]=useState("");

	function clickRojo(){
		console.log("Funciono")
		setGlowRojo("red")
		setGlowAmarillo("")	
		setGlowVerde("")
	}
	function clickAmarillo(){
		console.log("Funciono")
		setGlowAmarillo("yellow")
		setGlowRojo("")	
		setGlowVerde("")
	}
	function clickVerde(){
		console.log("Funciono")
		setGlowVerde("green")
		setGlowRojo("")
		setGlowAmarillo("")	
	}
	return (
		<div className="text-center">
			<div className="palito"></div>
			<div className="marcoSemaforo">	
				<div className="spacer"></div>			
				<div className="luzSemaforo" onClick={clickRojo} style={{backgroundColor:glowRojo}}></div>
				<div className="luzSemaforo" onClick={clickAmarillo} style={{backgroundColor:glowAmarillo}}></div>
				<div className="luzSemaforo" onClick={clickVerde} style={{backgroundColor:glowVerde}}></div>
				<div className="spacer"></div>	
			</div>
			
		</div>
	);
	
};

export default Home;
