import './App.css';
import {useState} from "react";
import BoxGeneratorForm from "./components/BoxGeneratorForm";
import DisplayBox from "./components/DisplayBox";

const boxes = [];

function App() {
  const [currentColor, setCurrentColor] = useState("");
  const [dimension, setDimension] = useState("");

  const addNewBox = (newColor, newDimension) => {
    setCurrentColor( newColor );
    setDimension( newDimension);
    boxes.push({ newColor: newColor, newDimension: newDimension });
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <div className="App">
      <BoxGeneratorForm onNewBox={ addNewBox }/>
      <div style={containerStyle}>
      { boxes.map( (item, i) => <span key={i}><DisplayBox color={ item.newColor } dimension={ item.newDimension} /></span>) }
      </div>
    </div>
  );
}

export default App;
