import './App.css';
import { Router } from '@reach/router';
import SearchForm from "./components/SearchForm";
import LukeApiWalker from "./components/LukeApiWalker";

function App() {
  return (
      <div className="App">
        <SearchForm/>
        <Router>
            <LukeApiWalker path={"/:element/:id"}/>
        </Router>
      </div>
  );
}

export default App;