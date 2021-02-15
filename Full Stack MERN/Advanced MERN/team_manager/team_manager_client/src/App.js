import './App.css';
import HeaderNav from "./components/HeaderNav";
import PlayerList from "./components/PlayerList";
import {Redirect, Router} from "@reach/router";
import AddPlayerForm from "./components/AddPlayerForm";
import MenuOptions from "./components/MenuOptions";
import PlayerStatus from "./components/PlayerStatus";

function App() {
  return (
    <div className="App">
        <HeaderNav/>
        <MenuOptions/>
        <Router>
            <Redirect to={"/players/list"} from={"/"}/>
            <PlayerList path={"/players/list"}/>
            <AddPlayerForm path={"/addPlayer"}/>
            <PlayerStatus path={"/status/game/1"}/>
        </Router>
    </div>
  );
}

export default App;
