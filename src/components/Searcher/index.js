import React from 'react';
import styled from 'styled-components';
import PokemonList from '../PokemonList/index.jsx'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';




const Wraper = styled.div`
   width: 100%;
   height: 250px;
   background: rgb(255, 255, 255);
   display: flex;
   margin: 20px;
   align-items: center;
   justify-content: center;
`;

const Slider = styled.div`
   width: 80%;
   height: 70%;
   display: flex;
   align-items: center;
   justify-content: center;
   background: rgb(255, 255, 255);
`;

const Input = styled.input`
   width: 72%;
   height: 22%;
   display: flex;
   background: rgb(255, 255, 255);
   border-radius: 10px;
   border: solid 2px #934acc;
`;

const Div = styled.div`
   width: 100%;
   height: 100%;
`;

export default function Searcher({pokemons}) {

  const [query, setQuery] = useState('')
  
const Search = () =>{
    return pokemons.filter(pokemon=>pokemon.name.toLowerCase().includes(query));
  }

const pokedux = Search();

  return (
      <div>
      <Wraper>
        <Slider>
          <Input placeholder='Busca tu pokemon faborito' onChange={(e)=>setQuery(e.target.value)}/>
        </Slider>
      </Wraper>
      <PokemonList pokedux={pokedux}/>  
      </div>
  );
}
