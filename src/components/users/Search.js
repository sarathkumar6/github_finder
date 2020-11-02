import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	state = {
		text: ''
	};
	static propTypes = {
		onSearchUsers: PropTypes.func.isRequired, //ptfr shortcut
		clearUsers: PropTypes.func.isRequired,
		setAlert: PropTypes.func.isRequired
	};
	onChangeHandler = (e) => {
		this.setState({ text: e.target.value });
	};
	onSubmitHandler = (e) => {
		e.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert('Please enter a search text', 'light');
		} else {
			this.props.setAlert();
			this.props.onSearchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};
	render() {
		const { showClear, clearUsers } = this.props;
		return (
			<div>
				<form className='form' onSubmit={this.onSubmitHandler.bind(this)}>
					<input
						type='text'
						name='text'
						placeholder='Search users...'
						value={this.state.text}
						onChange={this.onChangeHandler}
					/>
					<input type='submit' value='Search' className='btn btn-dark btn-block' />
				</form>
				{showClear && (
					<button className='btn btn-light btn-block' onClick={clearUsers}>
						Clear
					</button>
				)}
			</div>
		);
	}
}

// const searchStyle = {
// 	marginLeft: '5%',
// 	marginRight: '5%'
// };

export default Search;
