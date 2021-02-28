import {navigate} from "@reach/router";

const CreateButton = () => {
    return <button style={{background: "lightblue", margin:"5px"}} onClick={(e) => navigate("/polls/new") }>Create your own poll</button>
};

export default CreateButton;