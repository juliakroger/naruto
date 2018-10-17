import { friends } from '../friends';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';


import { SetSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

//dispatch is what trigger the action
const masDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(SetSearchField(event.target.value))
	}
}

class App extends Component{
	constructor() {
		super()
		this.state = {
		friends: friends,
		}
	}


	render(){
	const {friends} = this.state;
	const { searchField, onSearchChange } = this.props; 
	const filteredFriends = friends.filter(friend =>{
	return friend.nome.toLowerCase().includes(searchField.toLowerCase()); })
	
	return (
		<div className = 'tc'>
		<h1 className='f1'>Naruto Friends</h1>
		<SearchBox searchChange={onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
			<CardList friends={filteredFriends} />
		</ErrorBoundry>
		</Scroll>
		</div>
		);
	}

}

export default connect(mapStateToProps, masDispatchToProps)(App);