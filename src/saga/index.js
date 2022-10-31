import { call, put, takeEvery } from 'redux-saga/effects';
import { setError, setPokemon } from '../actions';
import { getPokemonsWithDetails } from '../api/getPokemons';

function* fetchPokemonsWithDetails(action){
	try{
		const pokemonsWithDetails = yield call(
			getPokemonsWithDetails,
			action.payload
		);
		yield put(setPokemon(pokemonsWithDetails));
	} catch(e){
		yield put(setError({ message: 'Error al obtener detalles', error: e}))
	}
}

function* pokemonSaga() {
	yield takeEvery('FETCH_POKEMON_DETAIL', fetchPokemonsWithDetails);
}

export default pokemonSaga;