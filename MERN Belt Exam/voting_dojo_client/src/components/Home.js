import logo from './chart.png';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "@reach/router";
import CreateButton from "./CreateButton";

const Home = () => {
    const [polls, setPolls] = useState([])
    const [topThree, setTopThree] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAllPolls")
            .then(response => setPolls((response.data)))
            .catch(error => console.log("There was an issue: ", error))

        axios.get("http://localhost:8000/api/topThree")
            .then(response => setTopThree((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }, [])


    return (
        <>
            <div style={{display: "flex", justifyContent:"end"}}>
                <CreateButton/>
            </div>
            {
                polls.length > 0 ?
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <div style={{background:"lightgray", borderStyle:"solid"}}>
                            <h1>Top 3 Polls</h1>
                            {
                                topThree.map((poll, index) => {
                                    return(
                                        <div style={{background:"white", margin:"10px"}} key={index}>
                                            <img src={logo} alt={"chart image"} width={"50px"}/>
                                            <p><Link to={"/polls/" + poll._id}>{poll.question}</Link></p>
                                            <p>{poll.optionOne.answer}: {poll.optionOne.votes}</p>
                                            <p>{poll.optionTwo.answer}: {poll.optionTwo.votes}</p>
                                            {
                                                poll.optionThree.answer !== undefined ?
                                                    <p>{poll.optionThree.answer}: {poll.optionThree.votes}</p>
                                                    : ""
                                            }
                                            {
                                                poll.optionFour.answer !== undefined ?
                                                    <p>{poll.optionFour.answer}: {poll.optionFour.votes}</p>
                                                    : ""
                                            }
                                            <p>({poll.created})</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div style={{background:"lightgray", borderStyle:"solid"}}>
                            <h1>Recent Polls</h1>
                            {
                                polls.map((poll, index) => {
                                    return(
                                        <div style={{background:"white", margin:"10px"}} key={index}>
                                            <img src={logo} alt={"chart image"} width={"50px"}/>
                                            <p><Link to={"/polls/" + poll._id}>{poll.question}</Link></p>
                                            <p>{poll.optionOne.answer}: {poll.optionOne.votes}</p>
                                            <p>{poll.optionTwo.answer}: {poll.optionTwo.votes}</p>
                                            {
                                                poll.optionThree.answer !== "" ?
                                                    <p>{poll.optionThree.answer}: {poll.optionThree.votes}</p>
                                                    : ""
                                            }
                                            {
                                                poll.optionFour.answer !== "" ?
                                                    <p>{poll.optionFour.answer}: {poll.optionFour.votes}</p>
                                                    : ""
                                            }
                                            <p>({poll.created})</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                : <h1>Loading...</h1>
            }
        </>
    )
};

export default Home;