import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { friends } from '../friends';
import './App.css';


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
	const {friends, searchfield} = this.state;
	const filteredFriends = friends.filter(friend =>{
	return friend.nome.toLowerCase().includes(searchfield.toLowerCase()); })
	
	return (
		<div className = 'tc'>
		<h1 className='f1'>Naruto Friends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList friends={filteredFriends} />
		</Scroll>
		</div>
		);
	}

}

export default App;