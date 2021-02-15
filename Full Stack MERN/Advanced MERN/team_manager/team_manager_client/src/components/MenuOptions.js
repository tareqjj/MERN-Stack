import {Link} from "@reach/router";

const MenuOptions = () => {
    return <p><Link to={"/players/list"}>List</Link> | <Link to={"/addPlayer"}>Add Player</Link> </p>
};

export default MenuOptions;