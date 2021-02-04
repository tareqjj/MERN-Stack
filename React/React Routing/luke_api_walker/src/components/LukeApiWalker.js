import {useEffect, useState} from "react";
import axios from 'axios';
import image from './img.png';
import {Link} from "@reach/router";

const LukeApiWalker = props => {
    const [responseData, setResponseData] = useState("");
    const [homeWorld, setHomeWorld] = useState("");
    const [id, setId] = useState("");

    useEffect( () => {
        axios.get("https://swapi.dev/api/" + props.element + "/" + props.id)
            .then(response => setResponseData(response.data))
            .catch(response => setResponseData("not found"))
    }, [props.element, props.id]);

    useEffect( () => {
    axios.get(responseData.homeworld)
        .then(response => {
            setHomeWorld(response.data);
            const getID = response.data.url.match(/(\d+)/);
            setId(getID[0]);
        }).catch(response => console.log(response.message))
    }, [responseData.homeworld]);

    if (props.element === "people" && responseData !== "not found") {
        return (
            <>
                <h1>{responseData.name}</h1>
                <br/>
                <h3>Height: {responseData.height}</h3>
                <h3>Mass: {responseData.mass}</h3>
                <h3>Hair Color: {responseData.hair_color}</h3>
                <h3>Skin Color: {responseData.skin_color}</h3>
                <h3>Home World: {homeWorld.name}</h3>
                <Link to={"/planets/" + id }>Home World Details</Link>
            </>
        );
    }
    else if (props.element === "planets" && responseData !== "not found") {
        return (
            <>
                <h1>{responseData.name}</h1>
                <br/>
                <h3>Climate: {responseData.climate}</h3>
                <h3>Terrain: {responseData.terrain}</h3>
                <h3>Surface Water: {responseData.surface_water ? "true" : "false"}</h3>
                <h3>Population: {responseData.population}</h3>
            </>
        );
    }
    else if (props.element === "starships" && responseData !== "not found") {
        return (
            <>
                <h1>{responseData.name}</h1>
                <br/>
                <h3>Model: {responseData.model}</h3>
                <h3>Manufacturer: {responseData.manufacturer}</h3>
                <h3>Crew: {responseData.crew}</h3>
                <h3>Passengers: {responseData.passengers}</h3>
            </>
        );
    }
    else {
        return (
            <>
                <h1>These aren't the droids you're looking for</h1>
                <img src={image} alt={"Obi-Wan Kenobi"}/>
            </>
        );
    }
};

export default LukeApiWalker;