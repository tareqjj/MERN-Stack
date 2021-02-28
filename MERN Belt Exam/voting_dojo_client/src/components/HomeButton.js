import {navigate} from "@reach/router";

const HomeButton = () => {
    return <button style={{background:"lightblue"}} onClick={(e) => navigate("/") }>Back to Home</button>
};

export default HomeButton;