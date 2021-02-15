import {useEffect, useState} from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const PlayerStatus = () => {
    const [players, setPlayers] = useState([])
    const [updatedPlayer, setUpdatedPlayer] = useState([])
    const [playerStatus, setPlayerStatus] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAllPlayers")
            .then(response => setPlayers((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }, [updatedPlayer]);


    const updateStatus = (player) => {
        axios.put("http://localhost:8000/api/player/" + player[0], {
            playerName: player[1],
            preferredPosition: player[2],
            playerStatus: player[3]
        })
            .then(response => setUpdatedPlayer((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }


    const onClickHandler = e => {
        e.preventDefault();
        const playerToUpdate = e.target.value.split(",");
        updateStatus(playerToUpdate);
    };

    return(
        <>
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
                                        <button onClick={ onClickHandler } value={[player._id, player.playerName, player.preferredPosition, "Playing"]}>Playing</button>
                                        <button onClick={ onClickHandler } value={[player._id, player.playerName, player.preferredPosition, "Not Playing"]}>Not Playing</button>
                                        <button onClick={ onClickHandler } value={[player._id, player.playerName, player.preferredPosition, "Undecided"]}>Undecided</button>
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