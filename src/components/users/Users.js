import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';

function Users({ users, loading }) {
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

Users.propTypes = {
	users: PropTypes.array.isRequired, //ptar shortcut
	loading: PropTypes.bool.isRequired //ptbr shortcut
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
	// marginLeft: '5%',
	// marginRight: '5%'
};

export default Users;
