import React , { useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
  


window.onload = function(){
    const targetDiv = document.getElementById("returned-API-data");
    const btn = document.getElementById("submit-button");
    btn.onclick = function () {
        if (targetDiv.style.display === "block") {
            targetDiv.style.display = "none";
        } else {
            targetDiv.style.display = "block";
        };
    };
};

const Form = (props) => {
    const [nameObject, setNameObject] = useState({name: "", age: "", count: ""});

    const handleInput = (event) =>{
        event.preventDefault();
        let username = event.target.value;
        //console.log(username);
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
      <TextField 
      id="outlined-basic" 
      label="Name"
      value={nameObject.name}
      onChange={handleInput}
      variant="outlined" >
      </TextField>
      <Button 
      id="submit-button" 
      variant="contained"
      type="submit"
      onClick={handleSubmit}
      aria-label="button to submit form">
        Submit
      </Button>
    </form>
    <div id="returned-API-data">
        We think you are {nameObject.age}
    </div>
  </div>
  )
}

export default Form;