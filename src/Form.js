import React , { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
  


window.onload =function(){
    const targetDiv = document.getElementById("returned-API-data");
const btn = document.getElementById("submit-button");
btn.onclick = function () {
  if (targetDiv.style.display === "block") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
}

const Form = ({addName, closeForm}) => {
    const [name, setName] = useState("");

    const handleName = (e) => {
    setName(e.target.value);
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        let res = await fetch (`https://api.agify.io?name=${name}`, {
        method: "POST",    
        body: JSON.stringify({
                name: name
            }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
            setName("");
        }
        } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="form-wrapper">
    <form className="name-submit-form">
      <TextField 
      id="outlined-basic" 
      label="Name" 
      variant="outlined"
      onChange= {handleName} />
      <Button 
      id="submit-button" 
      variant="contained"
      aria-label="button to submit form"
      onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  </div>
  )
}

  export default Form;