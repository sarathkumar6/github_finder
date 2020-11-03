import React, { useReducer, useState } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
	githubClientId = '7a26272ebf1a0d17cd25';
	githubClientSecret = '980d0d4ff101da92582af1aa1e9814e774b10fa3';
}
const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		alert: null
	};

	const [ state, dispatch ] = useReducer(GithubReducer, initialState);

	// Search users
	const onSearchUsers = async (searchText) => {
		setLoading();
		const response = await axios.get(
			`https://api.github.com/search/users?q=${searchText}&client_id=${githubClientId}&client_secrect=${githubClientSecret}`
		);
		dispatch({ type: SEARCH_USERS, payload: response.data.items });
	};

	// Get User
	const getUser = async (userName) => {
		setLoading();
		const response = await axios.get(
			`https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secrect=${githubClientSecret}`
		);
		dispatch({ type: GET_USER, payload: response.data });
	};

	// Get user Repos
	const getUserRepos = async (userName) => {
		setLoading();
		const response = await axios.get(
			`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=7a26272ebf1a0d17cd25&client_secrect=980d0d4ff101da92582af1aa1e9814e774b10fa3`
		);
		dispatch({ type: GET_REPOS, payload: response.data });
	};

	// Clear Users
	const clearUsers = () => {
		dispatch({ type: CLEAR_USERS });
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				alert: state.alert,
				onSearchUsers,
				clearUsers,
				getUser,
				getUserRepos
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
