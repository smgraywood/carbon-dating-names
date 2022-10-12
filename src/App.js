import React from "react";
import "./App.css";
import dino from "./dino_image.jpg";
import Form from "./components/Form.js"
import Typography from "@mui/material/Typography";
import PageHeading from "./components/PageHeading";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<PageHeading
				heading={"Name Carbon Dater"}
				subHeading={"Enter your name and press submit to see what age we think you might be!"}
				/>
				<div id="image-wrapper">
					<img src={dino} id="dino-logo" alt="dinosaur logo" />
				</div>
			</header>
			<Form />
		</div>
	);
}

export default App;