import React, { Component } from 'react';

export class UserItem extends Component {
	render() {
		const { html_url, avatar_url, login } = this.props.user;
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
}

export default UserItem;
