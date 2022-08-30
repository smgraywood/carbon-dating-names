import './App.css';
import dino from './dino_image.jpg'
import Form from './Form.js'

// async function nameCarbonDater(name) {
//   let obj;
//   const result =await fetch(`https://api.agify.io?name=${name}`)
//   obj = await result.json();
//   console.log(obj)
//   }
  
//   nameCarbonDater("michael")


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Name Carbon Dater</h1>
        <h6>Enter your name and press submit to see what age we think you might be!</h6>
        <div id="image-wrapper">
          <img src={dino} id="dino-logo" alt="dinosaur logo" />
        </div>
        < Form />
        <div id="returned-API-data">
          This is a placeholder for the returned API info
        </div>
      </header>
    </div>
  );
}

export default App;
