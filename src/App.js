import React, {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js'
import { friends } from './friends.js';


class App extends Component{
	constructor() {
		super()
		this.state = {
		friends: friends,
		searchfield: ''
		}
	}


onSearchChange = (event) => {
	this.setState({searchfield: event.target.value })
}
	

	render(){
	const filteredFriends = this.state.friends.filter(friend =>{
	return friend.nome.toLowerCase().includes(this.state.searchfield.toLowerCase());
})

	return (
		<div className = 'tc'>
		<h1>Naruto Friends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<CardList friends={filteredFriends} />
		</div>
		);
	}
}

export default App;