import {useEffect, useState} from "react";
import axios from "axios";
import HomeButton from "./HomeButton";

const DisplayPoll = (props) => {
    const [poll, setPoll] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/polls/" + props.pollId)
            .then(response => setPoll((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }, []);

    return (
        <>
            {
                poll.length > 0 ?
                    <div style={{background:"lightgray", margin:"20px", borderStyle:"solid"}}>
                        <div style={{display:"flex", justifyContent:"end", margin:"10px"}}>
                            <HomeButton/>
                        </div>
                        <p style={{background:"lightgreen"}}>Thanks for voting! Here are results...</p>
                        <div>
                            <h3>{poll[0].question}</h3>
                            <h4>{poll[0].optionOne.answer} {poll[0].optionOne.votes}</h4>
                        </div>
                        <div>
                            <h3>{poll[0].optionTwo.answer} {poll[0].optionTwo.votes}</h3>
                        </div>
                        {
                            poll[0].optionThree.answer !== "" ?
                                <div>
                                    <h3>{poll[0].optionThree.answer} {poll[0].optionThree.votes}</h3>
                                </div>
                                : ""
                        }
                        {
                            poll[0].optionFour.answer !== "" ?
                                <div>
                                    <h3>{poll[0].optionFour.answer} {poll[0].optionFour.votes}</h3>
                                </div>
                                : ""
                        }
                    </div>
                    : ""
            }
        </>
    )
};

export default DisplayPoll;