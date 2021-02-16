import {Link} from "@reach/router";

const HeaderNav = () => {
    return <p><Link to={"/players/list"}>Manage Players</Link> | <Link to={"/status/game/1"}>Manager Player Status</Link></p>
};

export default HeaderNav;