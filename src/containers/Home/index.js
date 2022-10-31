import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Searcher from '../../components/Searcher/index.js';
import PokemonList from '../../components/PokemonList/index.jsx'
import './styles.css';
import { getPokemons} from '../../api/getPokemons'
import { setPokemon, setError, fetchPokemonDetails } from '../../actions/index.js'
import axiosInstance from '../../api/config.js';



 


function Home() {
 
const dispatch = useDispatch();

const pokemons = useSelector((state) => state.list);

useEffect(()=>{
  getPokemons().then((res)=>{
    dispatch(fetchPokemonDetails(res.results));
  })
  .catch((error)=>{
    dispatch(setError({message: 'Ocurrio un error' , error}))
  })
},[dispatch])



  return (
    <div className='Home'>
      <Searcher pokemons={pokemons}/> 
    </div>
  );
}

export default Home;
