import React , { useState} from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Results = ({age}) => {
    return (<div 
    id="returned-API-data"
    aria-label="space to display age based on input name">
         We think you are {age}. 
    </div>
)};

const Form = (props) => {
    const [nameObject, setNameObject] = useState({name: "", age: "", count: ""});

    const handleInput = (event) =>{
        event.preventDefault();
        let username = event.target.value;
        setNameObject((nameObject) => ({...nameObject, name:username}));
    }

    // GET request 
    const handleSubmit = (event) => {
        event.preventDefault();
        const URL = `https://api.agify.io?name=${nameObject.name}`;
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            setNameObject(data);
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
      onChange={handleInput}
      variant="outlined" 
      aria-label="text feild in which you can input your name"
      >
      </TextField>
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