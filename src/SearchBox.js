import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
	return (
		<input className='pa2 ba b--light-blue br-pill grow' type='search' placeholder='search'	onChange={searchChange} />
		);

}

export default SearchBox;