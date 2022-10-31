import React from 'react';
import {Image, Label, Divider, Grid, Icon} from 'semantic-ui-react';
import {MAIN_COLOR, FAV_COLOR} from '../../utils/constants.js'

const PokemonCard = ({pokemon}) =>{

  console.log('line 7 ' + pokemon);

  if (!pokemon) return null;

	return(
	 <Grid.Column mobile={16} tablet={8} computer={4}> 	
      <div className='pokemontCard'>
        <Icon name='favorite' color={FAV_COLOR}/>
      	<Image centered src={pokemon.sprites.front_default} alt="Pokemont Image"/>
      	<h2 className='pokemonCard-title'>{pokemon.name}</h2>
      	<Divider/>
        {pokemon.types.map((type)=>(
          <Label color={MAIN_COLOR} key={`${pokemon.id}-${type.type.name}`} >{type.type.name}</Label>
          )
        )}  	
      </div>
    </Grid.Column>  
	)
}

export default PokemonCard;