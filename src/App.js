import './App.css';
import React, { Component } from 'react';
import Navbar from '../src/components/layout/Navbar';
import Users from '../src/components/users/Users';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar title='GitHub Profile Finder' />
				<div className='container' />
				<Users />
			</div>
		);
	}
}

export default App;
