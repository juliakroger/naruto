import React from 'react';
import Card from './Card.js';


const CardList = ({ friends }) => {
return (
<div>
{
	friends.map((user, i) => {
	return (
	<Card key={i} 
	nome={friends[i].nome} 
	vila={friends[i].vila} 
	img={friends[i].img}/>
		);
	})
}
</div>
	);
}

export default CardList;