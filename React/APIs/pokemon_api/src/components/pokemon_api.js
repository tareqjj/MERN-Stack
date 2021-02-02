import {useState} from "react";

const PokemonApi = () =>{
    const [pokemon, setPokemon] = useState([]);

    const handleClick = (e) =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                return response.json();
            }).then(response => {
            setPokemon(response.results);
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