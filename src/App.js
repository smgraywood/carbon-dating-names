import React from "react";
import "./App.css";
import dino from "./dino_image.jpg";
import Form from "./Form.js";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Name Carbon Dater</h1>
				<h6 id="user-message">
					Enter your name and press submit to see what age we think
					you might be!
				</h6>
				<div id="image-wrapper">
					<img src={dino} id="dino-logo" alt="dinosaur logo" />
				</div>
			</header>
			<Form />
		</div>
	);
}

export default App;