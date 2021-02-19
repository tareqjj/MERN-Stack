import {useEffect, useState} from "react";
import axios from "axios";

const GameStatusOne = (props) => {
    const [players, setPlayers] = useState([])
    const [updatedPlayer, setUpdatedPlayer] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAllPlayers")
            .then(response => setPlayers((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }, [updatedPlayer]);

    const onClickHandler = (e, playerId, playerName, preferredPosition, gameTwo, gameThree, UpdatedPlayerStatus) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/player/" + playerId, {
            playerName,
            preferredPosition,
            playerStatus: {
                game1: UpdatedPlayerStatus,
                game2: gameTwo,
                game3:gameThree
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
            <h1>Player Status - Game 1</h1>
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
                                    <td>{player.playerStatus.game1}</td>
                                    <td>
                                        <button style={ {background:green(player.playerStatus.game1)} } onClick={ (e) => onClickHandler(e, player._id, player.playerName, player.preferredPosition, player.playerStatus.game2, player.playerStatus.game3, "Playing") }>Playing</button>
                                        <button style={ {background:red(player.playerStatus.game1)} } onClick={ (e) => onClickHandler(e, player._id, player.playerName, player.preferredPosition, player.playerStatus.game2, player.playerStatus.game3, "Not Playing") }>Not Playing</button>
                                        <button style={ {background:yellow(player.playerStatus.game1)} } onClick={ (e) => onClickHandler(e, player._id, player.playerName, player.preferredPosition, player.playerStatus.game2, player.playerStatus.game3, "Undecided") }>Undecided</button>
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

export default GameStatusOne;