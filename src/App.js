import React from "react";
import "./App.css";
import dino from "./dino_image.jpg";
import Form from "./components/Form.js"
import PageHeading from "./components/PageHeading";
import theme from "./Themes";
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from "react-redux";


const store = createStore(RootReducer)

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
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
			</ThemeProvider>
		</Provider>
		
	);
}

export default App;