import React, { Component, Fragment } from 'react';
import UserItem from './UserItem.js';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

export default class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepos(this.props.match.params.login);
	}

	static propTypes = {
		loading: PropTypes.bool.isRequired, //ptbr
		user: PropTypes.object.isRequired, //ptor
		getUser: PropTypes.func.isRequired, //ptfr
		getuserRepos: PropTypes.func.isRequired, //ptfr
		repos: PropTypes.array.isRequired
	};
	render() {
		console.log('User props: ', this.props);
		const {
			id,
			name,
			login,
			company,
			avatar_url,
			location,
			bio,
			blog,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = this.props.user;

		const { loading, repos } = this.props;
		if (loading) {
			return <Spinner />;
		} else {
			return (
				<Fragment>
					<Link to='/' className='btn btn-light'>
						Back to Search
					</Link>
					Hireable: {' '}
					{hireable ? (
						<i className='fas fa-check text-success' />
					) : (
						<i className='fas fa-times-circle text-danger' />
					)}
					<div className='card grid-2'>
						<div className='all-center'>
							<img src={avatar_url} className='round-img' alt='' style={{ width: '6rem' }} />
							<h1>{name}</h1>
							<p>Location: {location}</p>
						</div>
						<div>
							{bio && (
								<Fragment>
									<h3>Bio</h3>
									<p>{bio}</p>
								</Fragment>
							)}
							<a target='_blank' className='btn btn-dark my-1' href='https://github.com/sarathkumar6'>
								{' '}
								View
							</a>
							<ul>
								<li>
									{login && (
										<Fragment>
											<strong>Username: </strong>
											{name}
										</Fragment>
									)}
								</li>
								<li>
									{company && (
										<Fragment>
											<strong>Company: </strong>
											{company}
										</Fragment>
									)}
								</li>
								<li>
									{blog && (
										<Fragment>
											<strong>Website: </strong>
											<a target='_blank' href={blog}>
												{blog}
											</a>
										</Fragment>
									)}
								</li>
							</ul>
						</div>
					</div>
					<div className='card text-center'>
						<div className='badge badge-primary'> Followers: {followers}</div>
						<div className='badge badge-success'> Followers: {following}</div>
						<div className='badge badge-light'> Followers: {public_repos}</div>
						<div className='badge badge-dark'> Followers: {public_gists}</div>
					</div>
					<Repos repos={repos} />
				</Fragment>
			);
		}
	}
}
