import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import pokemonReducer from './reducers/pokemonReducers.js';
import { logActions, reportError } from './middlewares';
import pokemonSaga from './saga/index.js';
import './index.css';

const sagaMiddleware = createSagaMiddleware()



const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose


const composedEnhacers = composeEnhancers(
  applyMiddleware(sagaMiddleware, logActions, reportError)
);


const store = createStore(pokemonReducer, composedEnhacers);

sagaMiddleware.run(pokemonSaga)

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider> 
	, document.getElementById('root')
);
