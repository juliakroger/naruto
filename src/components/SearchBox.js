import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
	return (
		<input className='pa2 ba b--navy br-pill grow' type='search' placeholder='search' style={{margin: '10px'}}	onChange={searchChange} />
		);

}

export default SearchBox;