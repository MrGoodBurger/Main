//This Component handles the PokeMon Divs

function PokeMon({ pokemon }) {
    return(
        <div>
            <button>{pokemon.name}</button>
            <p></p>
        </div>    
    )
};

export default PokeMon;