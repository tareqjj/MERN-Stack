import axios from 'axios';

export default props => {
    const { playerId, successCallback, playerName } = props;
    const deletePlayer = e => {
        const confirmWindow = window.confirm("Are you sure you want to remove " + playerName + "?");
        if (confirmWindow) {
            axios.delete('http://localhost:8000/api/player/' + playerId)
                .then(res => {
                    successCallback();
                })
                .catch(error => console.log("There was an issue: ", error))
        }
    }
    return (
        <button onClick={deletePlayer} style={{background:"red", color:"white"}}>
            Delete
        </button>
    )
}