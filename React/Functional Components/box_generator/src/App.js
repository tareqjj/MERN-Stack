import './App.css';
import {useState} from "react";
import BoxGeneratorForm from "./components/BoxGeneratorForm";
import DisplayBox from "./components/DisplayBox";

function App() {
  const [currentBox, setCurrentBox] = useState([]);

  const addNewBox = (newColor, newDimension) => {
    setCurrentBox( currentBox.concat( { newColor: newColor, newDimension: newDimension }) );
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
      <div className="App">
        <BoxGeneratorForm onNewBox={ addNewBox }/>
        <div style={containerStyle}>
          { currentBox.map( (item, i) => <span key={i}><DisplayBox color={ item.newColor } dimension={ item.newDimension} /></span>) }
        </div>
      </div>
  );
}

export default App;
