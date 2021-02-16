import {useEffect, useState} from "react";
import axios from "axios";

import {Link} from "@reach/router";

const PlayerStatus = props => {
    const [players, setPlayers] = useState([])
    const [updatedPlayer, setUpdatedPlayer] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAllPlayers")
            .then(response => setPlayers((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }, [updatedPlayer]);

    const onClickHandler = (e, playerId, playerName, preferredPosition, playerStatus) => {
        e.preventDefault();
        console.log(e.target.id)
        axios.put("http://localhost:8000/api/player/" + playerId, {
            playerName,
            preferredPosition,
            playerStatus
        })
            .then(response => setUpdatedPlayer((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    };

    const green = (playerStatus) => {
        if (playerStatus === "Playing")
            return "green";
    }

    const red = (playerStatus) => {
        if (playerStatus === "Not Playing")
            return "red";
    }

    const yellow = (playerStatus) => {
        if (playerStatus === "Undecided")
            return "yellow";
    }

    return(
        <>
            <h1>Player Status - Game {props.gameId}</h1>
            <Link to={"/status/game/1"}>Game 1</Link> | <Link to={"/status/game/2"}>Game 2</Link> | <Link to={"/status/game/3"}>Game 3</Link> |
            { players.length > 0 ?
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        players.map((player, index) => {
                            return(
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{player.playerName}</td>
                                    <td>{player.playerStatus}</td>
                                    <td>
                                        <button style={ {background:green(player.playerStatus)} } onClick={ (e) => onClickHandler(e, player._id, player.playerName, player.preferredPosition, "Playing") }>Playing</button>
                                        <button style={ {background:red(player.playerStatus)} } onClick={ (e) => onClickHandler(e, player._id, player.playerName, player.preferredPosition, "Not Playing") }>Not Playing</button>
                                        <button style={ {background:yellow(player.playerStatus)} } onClick={ (e) => onClickHandler(e, player._id, player.playerName, player.preferredPosition, "Undecided") }>Undecided</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                : <h1>Loading...</h1>
            }
        </>
    )
};

export default PlayerStatus;