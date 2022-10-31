import React from 'react';
import {Grid} from 'semantic-ui-react';
import PokemontCard from './PokemontCard.jsx';

const PokemonList = ({pokedux}) =>  {
	
	console.log('line 7 in index/pokedux '+pokedux);

	return(
        <div> 
          <Grid className='pokemonList'>
		   {pokedux.map((pokemon, index) => (
	         <PokemontCard  pokemon={pokemon} key={`pokemon-${index}`}/>
	        ))}
	      </Grid>
	    </div>  
    );
}

PokemonList.defaultProps = {
	pokemons: [],
}


export default PokemonList;