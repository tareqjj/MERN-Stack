import './App.css';
import {Router} from "@reach/router";
import Header from "./components/Header";
import AddPoll from "./components/AddPoll";
import Home from "./components/Home";
import DisplayPoll from "./components/DisplayPoll";
import CastVote from "./components/CastVote";

function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
            <Home path={"/"}/>
            <AddPoll path={"polls/new"}/>
            <CastVote path={"polls/:pollId"}/>
            <DisplayPoll path={"poll/:pollId"}/>
        </Router>
    </div>
  );
}

export default App;
