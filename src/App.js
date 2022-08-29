import './App.css';
import dino from './dino_image.jpg'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Name Carbon Dater</h3>
        <h6>Enter your name and press submit to see what age we think you might be!</h6>
        <img src={dino} id="dino-logo" alt="dinosaur logo" />
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <Button id="submit-button" variant="contained">Submit</Button>
        
      </header>
    </div>
  );
}

export default App;
