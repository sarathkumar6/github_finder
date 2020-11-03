import './App.css';
import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import Alert from '../src/components/layout/Alert';
import Users from '../src/components/users/Users';
import User from '../src/components/users/User';
import Search from '../src/components/users/Search';
import About from '../src/components/pages/About';
import GithubState from '../src/context/github/GithubState';
import AlertState from '../src/context/alert/AlertState';

const App = () => {
	// Note: when creating async choose function expression that attachs it to this

	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar title='GitHub Profile Finder' />
						<div className='container'>
							<Alert />
							<Switch>
								<Route
									exact
									path='/'
									render={(props) => {
										return (
											<Fragment>
												<Search />
												<Users />
											</Fragment>
										);
									}}
								/>
								<Route exact path='/user/:login' component={User} />
								<Route excat path='/about' component={About} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
