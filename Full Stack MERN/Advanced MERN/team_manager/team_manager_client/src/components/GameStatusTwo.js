import {useEffect, useState} from "react";
import axios from "axios";

const GameStatusTwo = props => {
    const [players, setPlayers] = useState([])
    const [updatedPlayer, setUpdatedPlayer] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAllPlayers")
            .then(response => setPlayers((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }, [updatedPlayer]);

    const onClickHandler = (e, playerId, playerName, preferredPosition, gameOne, gameThree, UpdatedPlayerStatus) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/player/" + playerId, {
            playerName,
            preferredPosition,
            playerStatus: {
                game1: gameOne,
                game2: UpdatedPlayerStatus,
                game3: gameThree
            }
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
            <h1>Player Status - Game 2</h1>
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
                                    <td>{player.playerStatus.game2}</td>
                                    <td>
                                        <button style={ {background:green(player.playerStatus.game2)} } onClick={ (e) => onClickHandler(e, player._id, player.playerName, player.preferredPosition, player.playerStatus.game1, player.playerStatus.game3, "Playing") }>Playing</button>
                                        <button style={ {background:red(player.playerStatus.game2)} } onClick={ (e) => onClickHandler(e, player._id, player.playerName, player.preferredPosition, player.playerStatus.game1, player.playerStatus.game3, "Not Playing") }>Not Playing</button>
                                        <button style={ {background:yellow(player.playerStatus.game2)} } onClick={ (e) => onClickHandler(e, player._id, player.playerName, player.preferredPosition, player.playerStatus.game1, player.playerStatus.game3, "Undecided") }>Undecided</button>
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

export default GameStatusTwo;