import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

// const composeEnhancers = window.__REDUX_DEVLTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	initialState, 
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

const app = (
	<Provider store={store} >
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// todo: change to registerServiceWorker()?
serviceWorker.unregister();