import './App.css';
import {Redirect, Router} from "@reach/router";
import HeaderNav from "./components/HeaderNav";
import MenuOptions from "./components/MenuOptions";
import GameStatusOne from "./components/GameStatusOne";
import GameOptions from "./components/GameOptions";

function App() {
  return (
    <div className="App">
        <HeaderNav/>
        <Router>
            <Redirect to={"/players/list"} from={"/"} noThrow/>
            <MenuOptions path={"players/*"}/>
            <GameOptions path={"status/game/*"}/>
        </Router>
    </div>
  );
}

export default App;
