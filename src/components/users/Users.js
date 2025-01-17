import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

function Users() {
	const githubContext = useContext(GithubContext);
	const { loading, users } = githubContext;
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{users.map((user) => {
					return <UserItem key={user.id} user={user} />;
				})}
			</div>
		);
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
	// marginLeft: '5%',
	// marginRight: '5%'
};

export default Users;
