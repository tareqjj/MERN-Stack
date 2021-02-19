import { useState } from "react"
import axios from "axios"
import { navigate, Link } from "@reach/router"
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginUser = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState([])

    const onSubmit = e => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/login", {
        email,
        password
    })
        .then(() => navigate("/books"))
        .catch(err =>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
        console.log(email)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p><Link to="/">Home</Link></p>
                    <p>Login Page
                        {
                            errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                        }
                    </p>
                </div>
            </div>
            <div className="row" style={{justifyContent:"center"}}>
                <div className="col-6">
                    <form onSubmit={ onSubmit }>
                        <div className="form-group">
                            <label>Email:</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input onChange={(e)=>setPassword(e.target.value)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group text-right">
                            <button onClick={()=>navigate("/")} type="button" className="btn btn-secondary btn-sm">Cancel</button>
                            <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginUser;