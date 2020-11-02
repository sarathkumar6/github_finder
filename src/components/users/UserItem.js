import React from 'react';
import PropTypes from 'prop-types';

function UserItem({ user: { html_url, avatar_url, login } }) {
	return (
		<div className='card text-center'>
			<img src={avatar_url} alt='' className='round-img' style={{ width: '4rem' }} />
			<h3>{login}</h3>
			<div>
				<a href={html_url} className='btn btn-dark btn-sm my-1'>
					More
				</a>
			</div>
		</div>
	);
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};
export default UserItem;
