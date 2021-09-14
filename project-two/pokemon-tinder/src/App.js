//This is the Main Component page
import React, { useEffect, useState } from "react";
import Badges from "./components/Badges";
import Bio from "./components/Bio";
import Image from "./components/Image";
import PokeMon from "./components/PokeMon";
import './App.css';
import FooterText from "./components/Footer";
import HeaderText from "./components/Header";
import styled from "styled-components";




const pokemonTeam = ["charizard", "kangaskhan", "snorlax", "dragonite", "hitmonchan", "gengar"]

const badges =[
  { 
    name: "Boulder Badge",
    earned: true,
  },
  { 
    name: "Cascade Badge",
    earned: true,
  },
  { 
    name: "Thunder Badge",
    earned: true,
  },
  {
     name: "Rainbow Badge",
    earned: true,
  },
  { 
    name: "Soul Badge",
    earned: false,
  },
  { 
    name: "Marsh Badge",
    earned: true,
  },
  { 
    name: "Volcano Badge",
    earned: true,
  },
  { 
    name: "Earth Badge",
    earned: true,
  },
  
];

//Styled Components
const Header = styled.header`
  grid-area: header;
  background-color: #ff3333;
  padding: 30px;
  text-align: left;
  `;

function App() {
  const fetchData = () => {
    pokemonTeam.map(poke => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      .then(res => res.json())
      .then(resJSON => {
        //Spread Operator(JS)  - adding the object of the API call to the pokeMon Array (state)
        //Instead of using cocatenation
        setPokemon(pokemon=>([...pokemon, resJSON]))
        // console.log(resJSON);
      })
    })

  }

  useEffect(()=> {
    // for(let i = 0; i < pokemonTeam.length; i++) {
    //   fetchData(pokemonTeam[i]);
    // }
    fetchData();
  }, []);

  const [pokemon, setPokemon] = useState([ ])
  return ( 
    <div id='grid-container'>
      <Header>
        <HeaderText
        />
      </Header>
      <Image
      />
      <Bio
      />
      <Badges
      badges={badges}/>
      {pokemon.map(poke => {
        return(
          <PokeMon
      pokemon={poke}/>
        )
      })}
      <div id="footer">
        <FooterText
        />
      </div>
    </div>
   );
}

export default App;
