import { useState } from "react"
import axios from "axios"
import { navigate } from "@reach/router"


const AddPlayerForm = () => {
    const [playerName, setPlayerName] = useState("")
    const [preferredPosition, setPreferredPosition] = useState("")
    const [errors, setErrors] = useState([])
    const [inputError, setInputError] = useState(" ")

    const onSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/createPlayer", {
            playerName,
            preferredPosition
        })
            .then(() => navigate("/players/list"))
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    const inputHandler = e =>{
        if (e.target.value.length < 1)
            setInputError("Player Name is required")
        else if (e.target.value.length < 2)
            setInputError("Player Name must be at least 2 characters long")
        else{
            setPlayerName(e.target.value);
            setInputError("");
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Add Player</h1>
                    <p style={{color:"red"}}>{inputError}</p>
                    <ul>{ errors.map((err, index) => <small key={index} style={{color:"red"}}><li>{err}</li></small>) }</ul>
                </div>
            </div>
            <div className="row" style={{justifyContent: "center"}}>
                <div className="col-6">
                    <form onSubmit={ onSubmit }>
                        <div className="form-group">
                            <label>Player Name:</label>
                            <input onChange={ inputHandler } type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Preferred Position:</label>
                            <input onChange={(e)=>setPreferredPosition(e.target.value)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group text-right">
                            <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}} data-toggle="button" disabled={inputError}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPlayerForm;