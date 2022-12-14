import { SET_POKEMON, SET_ERROR, CLEAR_ERROR, FETCH_POKEMON_DETAIL } from './type.js';


export const setPokemon = (payload) => ({
	type: SET_POKEMON,
	payload,
})

export const fetchPokemonDetails = (payload) => ({
    type:FETCH_POKEMON_DETAIL,
    payload,

})

export const setError = (payload) => ({
	type: SET_ERROR,
	payload,
})
export const clearError = (payload) => ({
	type: CLEAR_ERROR,
	payload,
})
