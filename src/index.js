import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { friends } from './friends.js';


ReactDOM.render(
	<CardList friends = {friends} />
, document.getElementById('root'));
registerServiceWorker();
