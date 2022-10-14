import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import HelperText from "./HelperText";

const Form = (props) => {
	const [agifyData, setAgifyData] = useState([]);
	const [names, setNames] = useState([]);
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseOver = () => {
		setIsHovering(true);
	};

	//handler for name/names being added to textfield
	const handleNameInput = (event) => {
		event.preventDefault();
		let nameString = event.target.value;
		setNames((x) => nameString.split(","));
	};

	// GET request
	const handleSubmit = (event) => {
		event.preventDefault();
		let URL = "https://api.agify.io?";
		for (let name of names) {
			URL = URL.concat(`name[]=${name}&`);
		}
		//to determine whether there is a trailing ampersand
		let trailingAmpersandURL = URL.endsWith("&");
		//to determine whether more than one name was added and if the trailing ampersand is there, remove it
		URL = trailingAmpersandURL ? URL.slice(0, -1) : URL;
		fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				setAgifyData(data);
			});
	};

	return (
		<div className="form-wrapper">
			<form className="name-submit-form">
				<Grid
					container
					alignItems="center"
					justify="center"
					direction="column"
				>
					<>
					<HelperText 
					isHovering={isHovering}/>					
					</>
					<Grid item>
						<TextField
							autoComplete="off"
							id="outlined-basic"
							label="Name(s)"
							sx={{
								"& label": {
									width: "90%",
									transformOrigin: "center",
									outline: "none",
									disabledUnderline: true,
								},
								"& legend": {
									width: "50%",
									textAlign: "center",
								},
							}}
							value={agifyData.name}
							onChange={handleNameInput}
							onMouseOver={handleMouseOver}
							variant="outlined"
							aria-label="text field in which you can input your name"
						></TextField>
					</Grid>
					<Button
						id="submit-button"
						variant="contained"
						type="submit"
						onClick={handleSubmit}
						aria-label="button to submit form"
					>
						Submit
					</Button>
				</Grid>
			</form>
			{{ handleSubmit }
				? agifyData.map((element) => (
						<div
							key={agifyData.id}
							id="returned-API-data"
							aria-label="space to display age based on input name(s) and country"
						>
							We think <b>{element.name}</b> is {element.age}.
						</div>
				  ))
				: null}
		</div>
	);
};

export default Form;