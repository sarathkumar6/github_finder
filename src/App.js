import './App.css';
import React, { Component } from 'react';
import Navbar from '../src/components/layout/Navbar';
import Alert from '../src/components/layout/Alert';
import Users from '../src/components/users/Users';
import Search from '../src/components/users/Search';
import axios from 'axios';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null
	};
	async componentDidMount() {
		// console.log(process.env);
		// this.setState({ loading: true });
		// const response = await axios.get(
		// 	`https://api.github.com/users?client_id=7a26272ebf1a0d17cd25&client_secrect=980d0d4ff101da92582af1aa1e9814e774b10fa3`
		// );
		// this.setState({ loading: false, users: response.data });
	}
	// Note: when creating async choose function expression that attachs it to this
	onSearchUsers = async (searchText) => {
		this.setState({ loading: true });
		const response = await axios.get(
			`https://api.github.com/search/users?q=${searchText}&client_id=7a26272ebf1a0d17cd25&client_secrect=980d0d4ff101da92582af1aa1e9814e774b10fa3`
		);
		console.log(response);
		this.setState({ loading: false, users: response.data.items });
	};

	clearUsers = () => this.setState({ users: [], loading: false });

	setAlert = (alertText, type) => {
		// Other approach is to remove the alert after a few seconds using setTimout
		// setTimeout(() => this.setState({alert: null}), 5000)
		if (!alertText || !type) {
			this.setState({ alert: null });
		} else {
			this.setState({ alert: { message: alertText, type } });
		}
	};
	render() {
		const { users, loading } = this.state;
		return (
			<div className='App'>
				<Navbar title='GitHub Profile Finder' />
				<div className='container'>
					<Alert alert={this.state.alert} />
					<Search
						onSearchUsers={this.onSearchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 1}
						setAlert={this.setAlert}
					/>
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
