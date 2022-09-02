import React , { useState} from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


//addition of country param? Addition of multiple names?
const Results = ({age}) => {
    return (<div 
    id="returned-API-data"
    aria-label="space to display age based on input name">
         We think you are {age}. 
    </div>
)};

const Form = (props) => {
    const [nameObject, setNameObject] = useState({name: "", age: "", count: ""});
	const [country, setCountry] = useState({country_id: ""});
	const[isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

    const handleNameInput = (event) =>{
        event.preventDefault();
        let username = event.target.value;
        setNameObject((nameObject) => ({...nameObject, name:username}));
    }
	const handleCountryInput = (event) =>{
		event.preventDefault();
		let country_id = event.target.value;
		setCountry((country) => ({...country, country_id:country_id}));
	}

    // GET request 
    const handleSubmit = (event) => {
        event.preventDefault();
        const URL = `https://api.agify.io?name=${nameObject.name}&${country.country_id}`;
		// const URL2 = `https://api.agify.io?name[]=${nameObject.name}`
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            setNameObject(data);		
			console.log(data)
            // this.props.onSubmit(data);
        })

    
}


  return (
    <div className="form-wrapper">
    <form className="name-submit-form">
    <Grid container alignItems="center" justify="center" direction="column">
        <Grid item >
      <TextField 
      id="outlined-basic"
      label="Name"
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
      value={nameObject.name}
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
	  onMouseOut={handleMouseOut}
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
    { nameObject.age ? <Results age={nameObject.age}/> : null } 
  </div>
  )
}

export default Form;