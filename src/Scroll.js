import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid #0D0C39' , height: '430px'}}>
		{props.children}
		</div>
	);
};

export default Scroll;