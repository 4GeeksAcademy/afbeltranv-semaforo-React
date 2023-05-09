import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [glow, setGlow]=useState("red");
	return (
		<div className="text-center">
			<div>
				<div>palito</div>
				<div style={{backgroundColor:glow}}>rojo</div>
				<div>amarillo</div>
				<div>verde</div>
			</div>
			
		</div>
	);
};

export default Home;
