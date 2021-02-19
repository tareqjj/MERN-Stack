import {Link, Router} from "@reach/router";
import GameStatusOne from "./GameStatusOne";
import GameStatusThree from "./GameStatusThree";
import GameStatusTwo from "./GameStatusTwo";

const GameOptions = () => {

    return(
        <>
            <p><Link to={"/status/game/1"}>Game 1</Link> | <Link to={"/status/game/2"}>Game 2</Link> | <Link to={"/status/game/3"}>Game 3</Link></p>
            <Router>
                <GameStatusOne path={"1"}/>
                <GameStatusTwo path={"2"}/>
                <GameStatusThree path={"3"}/>
            </Router>
        </>
    )
};

export default GameOptions;