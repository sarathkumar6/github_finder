import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import Alert from '../src/components/layout/Alert';
import Users from '../src/components/users/Users';
import User from '../src/components/users/User';
import Search from '../src/components/users/Search';
import About from '../src/components/pages/About';
import axios from 'axios';

class App extends Component {
	state = {
		users: [],
		user: {},
		repos: [],
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

	// Get a user

	getUser = async (userName) => {
		this.setState({ loading: true });
		const response = await axios.get(
			`https://api.github.com/users/${userName}?client_id=7a26272ebf1a0d17cd25&client_secrect=980d0d4ff101da92582af1aa1e9814e774b10fa3`
		);
		this.setState({ loading: false, user: response.data });
	};

	getUserRepos = async (userName) => {
		this.setState({ loading: true });
		const response = await axios.get(
			`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=7a26272ebf1a0d17cd25&client_secrect=980d0d4ff101da92582af1aa1e9814e774b10fa3`
		);
		this.setState({ loading: false, repos: response.data });
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
		const { users, user, loading, repos } = this.state;
		return (
			<Router>
				<div className='App'>
					<Navbar title='GitHub Profile Finder' />
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => {
									return (
										<Fragment>
											<Search
												onSearchUsers={this.onSearchUsers}
												clearUsers={this.clearUsers}
												showClear={users.length > 1}
												setAlert={this.setAlert}
											/>
											<Users loading={loading} users={users} />
										</Fragment>
									);
								}}
							/>
							<Route
								exact
								path='/user/:login'
								render={(props) => {
									return (
										<User
											{...props}
											getUser={this.getUser}
											getUserRepos={this.getUserRepos}
											user={user}
											repos={repos}
											loading={loading}
										/>
									);
								}}
							/>
							<Route excat path='/about' component={About} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
