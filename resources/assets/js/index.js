import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';

// import {createStore} from 'redux';
import myReducer from './reducers/index';
import {Provider} from 'react-redux';


import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore( 
	myReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)	
 );

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('example'));


