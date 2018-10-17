import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';
import { searchFriends } from './reducers';
import 'tachyons';


const logger = createLogger();
const store = createStore(searchFriends, applyMiddleware(logger))

ReactDOM.render(
	<Provider store = { store }>
	<App />
	</Provider>, document.getElementById('root'));


registerServiceWorker();
