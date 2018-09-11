import React from 'react';


const Card = ({ nome, vila, img}) => {
	return (
	<div className='dib br3 pa3 ma2 grow bw1 shadow-5'>
		<img src={`${img}`} alt='friends' height='250' width='185'/>
		<div className='tc'>
		<h2>{nome}</h2>
		<p>{vila}</p>
		</div>
	</div>
	);
}

export default Card;



