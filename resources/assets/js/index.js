import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';

import {createStore} from 'redux';
import myReducer from './reducers/index';
import {Provider} from 'react-redux';


const store = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('example'));
