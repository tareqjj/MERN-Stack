import './App.css';
import {Redirect, Router} from "@reach/router";
import HeaderNav from "./components/HeaderNav";
import MenuOptions from "./components/MenuOptions";
import PlayerStatus from "./components/PlayerStatus";

function App() {
  return (
    <div className="App">
        <HeaderNav/>
        <Router>
            <Redirect to={"/players/list"} from={"/"} noThrow/>
            <MenuOptions path={"players/*"}/>
            <PlayerStatus path={"/status/game/:gameId"}/>
        </Router>
    </div>
  );
}

export default App;
