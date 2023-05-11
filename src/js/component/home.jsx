import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [glowRojo, setGlowRojo]=useState("");
	const [glowAmarillo, setGlowAmarillo]=useState("");
	const [glowVerde, setGlowVerde]=useState("");

	function clickRojo(){		
		setGlowRojo("0 0 30px 10px white")
		setGlowAmarillo("")	
		setGlowVerde("")
	}
	function clickAmarillo(){		
		setGlowAmarillo("0 0 30px 10px white")
		setGlowRojo("")	
		setGlowVerde("")
	}
	function clickVerde(){		
		setGlowVerde("0 0 30px 10px white")
		setGlowRojo("")
		setGlowAmarillo("")	
	}
	function cambiarLuces(){		
		setTimeout(clickRojo,500)
		setTimeout(clickAmarillo,1000)
		setTimeout(clickVerde,1500)
	}

	function cicloLuces(){
		setInterval(cambiarLuces,2000)
	}
	return (
		<div className="text-center">
			<div className="palito"></div>
			<div className="marcoSemaforo">	
				<div className="spacer"></div>			
				<div className="luzSemaforoRojo" onClick={clickRojo} style={{boxShadow:glowRojo}}></div>
				<div className="luzSemaforoAmarillo" onClick={clickAmarillo} style={{boxShadow:glowAmarillo}}></div>
				<div className="luzSemaforoVerde" onClick={clickVerde} style={{boxShadow:glowVerde}}></div>
				<div className="spacer"></div>	
			</div>
			<button onClick={cicloLuces}>Cambiar Luces</button>
			
		</div>
	);
	
};

export default Home;
