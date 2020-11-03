import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import Alert from '../src/components/layout/Alert';
import User from '../src/components/users/User';
import About from '../src/components/pages/About';
import Home from '../src/components/pages/Home';
import NotFound from '../src/components/pages/NotFound';
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
								<Route exact path='/' component={Home} />
								<Route exact path='/user/:login' component={User} />
								<Route excat path='/about' component={About} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
