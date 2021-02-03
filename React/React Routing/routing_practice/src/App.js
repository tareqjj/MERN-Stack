import { Router } from '@reach/router';
import './App.css';
import Home from "./components/Home";
import NumberOrWord from "./components/NumberOrWord";
import WordColored from "./components/WordColored";

function App() {
  return (
    <div className="App">
      <Router>
          <Home path="/home"/>
          <NumberOrWord path="/:value"/>
          <WordColored path="/:value/:color/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;
