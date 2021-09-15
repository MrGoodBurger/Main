//This Component handles the PokeMon Divs

import { useState } from "react";

function PokeMon({ pokemon }) {
    const [showPoke, setShow] = useState(false);
    const pokeDiv =
        <div>
            <p>{pokemon.types[0].type.name}</p>
            <p>{pokemon.height}</p>
            <p>{pokemon.weight}</p>
        </div>
    
    const changeButtonState = () => {
        //Creating a function in a react hook, prevState can be anything but it represents the current state. Only works with booleans
        //Toggle only works for booleans(obviously "logical makes sense")
        setShow(banana=>!banana)
    }
    return(
        <div>
            <button onClick={changeButtonState}>{pokemon.name}</button>
            {showPoke ? pokeDiv : " "}
        </div>    
    )
};

export default PokeMon;