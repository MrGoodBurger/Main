//This is the Main Component page
import React, { useEffect, useState } from "react";
import Badges from "./components/Badges";
import Bio from "./components/Bio";
import Image from "./components/Image";
import PokeMon from "./components/PokeMon";
import './App.css';
import FooterText from "./components/FooterText";
import HeaderText from "./components/HeaderText";
import styled from "styled-components";
import Image2 from "./components/Image2";
import boulder from "./images/Boulderbadge.png";
import cascade from "./images/Cascadebadge.png";
import thunder from "./images/Thunderbadge.png";
import rainbow from "./images/Rainbow_Badge.png";
import soul from "./images/Soulbadge.png";
import marsh from "./images/Marshbadge.png";
import volcano from "./images/Volcanobadge.png";
import earth from "./images/Earthbadge.png";




const pokemonTeam = ["charizard", "kangaskhan", "snorlax", "dragonite", "hitmonchan", "gengar"]

const badges =[
  { 
    name: "Boulder Badge",
    pic: {boulder},
    earned: true,
  },
  { 
    name: "Cascade Badge",
    pic: {cascade},
    earned: true,
  },
  { 
    name: "Thunder Badge",
    pic: {thunder},
    earned: true,
  },
  {
     name: "Rainbow Badge",
     pic: {rainbow},
    earned: true,
  },
  { 
    name: "Soul Badge",
    pic: {soul},
    earned: false,
  },
  { 
    name: "Marsh Badge",
    pic: {marsh},
    earned: true,
  },
  { 
    name: "Volcano Badge",
    pic: {volcano},
    earned: true,
  },
  { 
    name: "Earth Badge",
    pic: {earth},
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

const Footer = styled.footer`
  grid-area: footer;
  background-color: #ff3333;
  padding: 10px;
  text-align: center;
  `;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition:0.3s;
  border: 3px solid black;
  `;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  padding: 50px;
  `;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  `;

  const InnerBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  `;

const BioContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff9999;
  `;

const PokemonContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #b4fdfd;
  border: 2px solid black;
  margin: 16px 20px 20px 100px;
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
    //Use inline Styling here
    <div id='grid-container'>
      <Header>
        <HeaderText
          />
      </Header>
      <CardContainer>
        <Card>
          <Image
            />
        </Card>
        <Card>
          <Image2
            />
        </Card>
      </CardContainer>
      <BioContainer>
          <Bio
        />
      </BioContainer>
      <BadgeContainer>
        <InnerBadgeContainer>
           {badges.map(badge => {
             return(
               <Badges
               badge={badge}/>
             )
           })}
        </InnerBadgeContainer>
      </BadgeContainer>
      
        {pokemon.map(poke => {
          return(
            <PokemonContainer>
              <PokeMon
                pokemon={poke}/>
            </PokemonContainer>
            )
          })}
      
      <Footer>
        <FooterText
          />
      </Footer>
    </div>
   );
}

export default App;
