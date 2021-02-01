import './App.css';
import Tabs from "./components/Tabs";
import {useState} from "react";
import DisplayTab from "./components/DisplayTab";

function App() {
    const [tabContent, setTabContent] = useState("");

    const newTabContent = (content) => {
        setTabContent(content);
    }

    return (
    <div className="App" >
      <Tabs tabs={ newTabContent }/>
      <DisplayTab content={tabContent}/>
    </div>
  );
}

export default App;
