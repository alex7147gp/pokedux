import { SET_POKEMON, SET_ERROR, CLEAR_ERROR } from '../actions/type.js';


const initialState = {
	list: [],
  error:'',
};


const pokemonReducer = (state = initialState, action) => {
  switch(action.type) {
  	case SET_POKEMON:
  	  return { ...state, list: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload.message};
    case CLEAR_ERROR:
      return { ...state, error: ''};    
  	default:
  	  return state;  
  }
}

export default pokemonReducer;