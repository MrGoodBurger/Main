//This Component handles the PokeMon Divs

function PokeMon({ pokemon }) {
    return(
        <div>
            {console.log(pokemon)}
            <button>{pokemon.name}</button>
            <p>{pokemon.types[0].type.name}</p>
            <p>{pokemon.height}</p>
            <p>{pokemon.weight}</p>

        </div>    
    )
};

export default PokeMon;