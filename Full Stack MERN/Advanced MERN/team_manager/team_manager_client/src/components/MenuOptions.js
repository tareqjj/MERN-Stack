import {Link, Router} from "@reach/router";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";

const MenuOptions = () => {
    return(
        <>
            <p><Link to={"/players/list"}>List</Link> | <Link to={"/players/addPlayer"}>Add Player</Link></p>
            <Router>
                    <PlayerList path={"list"}/>
                    <AddPlayerForm path={"addPlayer"}/>
            </Router>
        </>
    )
};

export default MenuOptions;