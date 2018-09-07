import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { friends } from './friends.js';


ReactDOM.render(
	<div>
		<Card nome={friends[0].nome} vila={friends[0].vila} img={friends[0].img}/>
		<Card nome={friends[1].nome} vila={friends[1].vila} img={friends[1].img}/>
		<Card nome={friends[2].nome} vila={friends[2].vila} img={friends[2].img}/>
	</div>

, document.getElementById('root'));
registerServiceWorker();
