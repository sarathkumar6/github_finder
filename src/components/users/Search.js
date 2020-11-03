import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

export function Search() {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const [ text, setText ] = useState('');

	const onChangeHandler = (e) => {
		setText(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert(true);
		} else {
			githubContext.onSearchUsers(text);
			alertContext.setAlert(false);
			setText('');
		}
	};
	return (
		<div>
			<form className='form' onSubmit={onSubmitHandler}>
				<input type='text' name='text' placeholder='Search users...' value={text} onChange={onChangeHandler} />
				<input type='submit' value='Search' className='btn btn-dark btn-block' />
			</form>
			{githubContext.users.length > 0 && (
				<button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
}

Search.propTypes = {
	setAlert: PropTypes.func.isRequired
};
// const searchStyle = {
// 	marginLeft: '5%',
// 	marginRight: '5%'
// };

export default Search;
