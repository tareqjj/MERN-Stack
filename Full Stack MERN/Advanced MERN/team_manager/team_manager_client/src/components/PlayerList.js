import axios from "axios"
import {useState, useEffect} from "react"
import DeleteButton from "./DeleteButton";
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerList = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAllPlayers")
            .then(response => setPlayers((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }, []);

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId))
    };

    return(
        <>
            { players.length > 0 ?
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player Name</th>
                        <th scope="col">Preferred Position</th>
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
                                    <td>{player.preferredPosition}</td>
                                    <td><DeleteButton playerId={player._id} successCallback={() => removeFromDom(player._id)} playerName={player.playerName}/></td>
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

export default PlayerList;