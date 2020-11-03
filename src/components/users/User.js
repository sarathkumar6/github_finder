import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

export default function User({ match }) {
	const githubContext = useContext(GithubContext);
	const { loading, user, getUser, getUserRepos, repos } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		// eslint-disable-next-line
	}, [] /** add contionals to run only once not to react in a loop*/);

	const {
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
	} = user;

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
										<a target='_blank' rel='noreferrer' href={blog}>
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
