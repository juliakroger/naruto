import React from 'react';


const Card = (props) => {
	return (
	<div className='bg-gold dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='friend' src={`${props.img}`}/>
		<div className='tc'>
		<h2>{props.nome}</h2>
		<p>{props.vila}</p>
		</div>
	</div>
	);
}

export default Card;