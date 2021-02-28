import { useState } from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import HomeButton from "./HomeButton";


const AddPoll = () => {
    const [question, setQuestion] = useState("")
    const [optionOne, setOptionOne] = useState("")
    const [optionTwo, setOptionTwo] = useState("")
    const [optionThree, setOptionThree] = useState("")
    const [optionFour, setOptionFour] = useState("")
    const [errors, setErrors] = useState([])
    const [questionError, setQuestionError] = useState(" ")
    const [optionOneError, setOptionOneError] = useState(" ")
    const [optionTwoError, setOptionTwoError] = useState(" ")

    const onSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/createPoll", {
            question,
            "optionOne.answer": optionOne,
            "optionTwo.answer": optionTwo,
            "optionThree.answer": optionThree,
            "optionFour.answer": optionFour
        })
            .then(() => navigate("/"))
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
    const inputHandler = e => {
        if (e.target.id === "question") {
            if (e.target.value.length < 1)
                setQuestionError("Question is Required");
            else if (e.target.value.length < 10)
                setQuestionError("Question must be 10 characters or longer!");
            else {
                setQuestionError("");
                setQuestion(e.target.value);
            }
        }

        else if (e.target.id === "optionOne") {
            if (e.target.value.length < 1)
                setOptionOneError("Option One is Required");
            else if (e.target.value.length < 2)
                setOptionOneError("Option One be 2 characters or longer!");
            else {
                setOptionOneError("");
                setOptionOne(e.target.value);
            }
        }

        else if (e.target.id === "optionTwo") {
            if (e.target.value.length < 1)
                setOptionTwoError("Option One is Required");
            else if (e.target.value.length < 2)
                setOptionTwoError("Option One be 2 characters or longer!");
            else {
                setOptionTwoError("");
                setOptionTwo(e.target.value);
            }
        }
    }

    return(
        <div className="container">
            <div style={{display:"flex", justifyContent:"end", margin:"10px"}}>
                <HomeButton/>
            </div>
            <div className="row">
                <div className="col-12">
                    <p style={{color:"red"}}>{questionError}</p>
                    <p style={{color:"red"}}>{optionOneError}</p>
                    <p style={{color:"red"}}>{optionTwoError}</p>
                    <ul>{ errors.map((err, index) => <small key={index} style={{color:"red"}}><li>{err}</li></small>) }</ul>
                </div>
            </div>
            <div className="row" style={{justifyContent: "center"}}>
                <div className="col-6">
                    <form onSubmit={ onSubmit } style={{display:"flex", justifyContent:"space-around", background:"lightgray", margin:"10px", borderStyle:"solid", padding:"10px"}}>
                        <div className="form-group">
                            <label>Your Question:</label>
                            <textarea id={"question"} onChange={ inputHandler } rows="8" cols="40" type="text" className="form-control"/>
                        </div>
                        <div>
                            <div className="form-group">
                                <label>option 1: *</label>
                                <input id={"optionOne"} onChange={ inputHandler } type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>option 2: *</label>
                                <input id={"optionTwo"} onChange={ inputHandler } type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>option 3:    </label>
                                <input onChange={(e)=>setOptionThree(e.target.value)} type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>option 4: </label>
                                <input onChange={(e)=>setOptionFour(e.target.value)} type="text" className="form-control"/>
                            </div>
                            <div className="form-group text-right">
                                <button className="btn btn-primary btn-sm" style={{marginLeft: "10px", background:"lightgreen"}} data-toggle="button" disabled={questionError || optionOneError || optionTwoError}>Submit Poll</button>
                            </div>
                            <p>* Indicates a required field</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPoll;
