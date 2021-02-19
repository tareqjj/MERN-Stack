
import './App.css';
import RegisterUser from "./components/RegisterUser";
import {Router} from "@reach/router";
import Books from "./components/Books";
import LoginUser from "./components/LoginUser";

function App() {
  return (
    <div className="App">
        <RegisterUser/>
        <LoginUser/>
        <Router>
            <Books path={"/books"}/>
        </Router>
    </div>
  );
}

export default App;
