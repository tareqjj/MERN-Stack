import {useState} from "react";
import axios from 'axios';


const PokemonApi = () =>{
    const [pokemon, setPokemon] = useState([]);

    const handleClick = (e) =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                return response;
            }).then(response => {
            setPokemon(response.data.results);
        }).catch(err=>{
            console.log(err);
        });
    }
    return (
        <>
            <button onClick={ handleClick }>Fetch Pokemon</button>
            <ol>
                {
                    pokemon.map( (item, index) => <li key={index}>{item.name}</li>)
                }
            </ol>
        </>
    );
}
export default PokemonApi;
