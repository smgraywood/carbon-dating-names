import React , { useState} from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


//addition of country param? Addition of multiple names?
//results assume one object size, so need to expand results to take in multiple dictionaries in <Results/> component
//for loop to display divs 


const Results = ({name, age}) => {
    return (<div 
    id="returned-API-data"
    aria-label="space to display age based on input name(s) and country">
         We think {name} is {age}. 
    </div>
)};

const Form = (props) => {
    const [agifyData, setAgifyData] = useState([]);
	const [country, setCountry] = useState({country_id: ""});
	const [isHovering, setIsHovering] = useState(false);
	const [names, setNames] = useState([]);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

    const handleNameInput = (event) =>{
        event.preventDefault();
        let nameString = event.target.value;
        setNames((x) => (nameString.split(",")));
    }
	const handleCountryInput = (event) =>{
		event.preventDefault();
		let country_id = event.target.value;
		setCountry((x) => ({...x, country_id:country_id}));
	}

    // GET request 
    const handleSubmit = (event) => {
        event.preventDefault();
        let URL = "https://api.agify.io?";
		for(let name of names){
			URL = URL.concat(`name[]=${name}&`)
		}
		//how to deal with dangling ampersand, last element of string? Get rid of last element
        URL = country.country_id ? URL.concat(`country_id=${country.country_id}`) : URL;
		let trailingAmpersandURL = URL.endsWith("&");
		URL = trailingAmpersandURL ? URL.slice(0, -1) : URL;
		console.log(names, URL)
		fetch(URL)
        .then(response => response.json())
        .then(data => {
            setAgifyData(data);		
            // this.props.onSubmit(data);
        })
	};


  return (
    <div className="form-wrapper">
    <form className="name-submit-form">
    <Grid container alignItems="center" justify="center" direction="column">
        <Grid item >
      <TextField 
      	id="outlined-basic"
      	label="Name(s)"
    	sx={{
    	"& label": {
          width: "90%",
          transformOrigin: "center",
		  outline: "none",
		  disabledUnderline: true
         },
		 "& legend": {
			width: "50%",
			textAlign: "center"
		  }
      }}
    	value={agifyData.name}
    	onChange={handleNameInput}
    	variant="outlined" 
    	aria-label="text feild in which you can input your name"
      >
    </TextField>	
      </Grid>
	  {isHovering && <a id="small-text-window" href="https://agify.io/our-data" target="blank">How Do I Input my Country?</a>}
	  <Grid item>  
	<TextField 
    	id="outlined-basic"
    	label="Country"
    	sx={{
    	"& label": {
          width: "90%",
          transformOrigin: "center",
		  outline: "none",
		  disabledUnderline: true
         },
		 "& legend": {
			width: "50%",
			textAlign: "center"
		  }
      }}
    	value={country.country_id}
    	onChange={handleCountryInput}
		onMouseOver={handleMouseOver}
		onBlur={handleMouseOut}
    	variant="outlined" 
    	aria-label="text feild in which you can input your country"
      ></TextField>
	  </Grid>
	  <Button 
    	id="submit-button" 
    	variant="contained"
    	type="submit"
    	onClick={handleSubmit}
    	aria-label="button to submit form">
        Submit
      </Button>
      </Grid>
    </form>
	for(i of i){
    <Results 
	name={agifyData.name}
	age={agifyData.age}
	/> 
	}
  </div>
  )
}

export default Form;

//for loop in jsx, get rid of ternary