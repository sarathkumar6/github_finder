import React, { useReducer, useState } from 'react';
import axios from 'axios';
import AlertContext from '../alert/alertContext';
import AlertReducer from '../alert/alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
	const initialState = null;

	const [ state, dispatch ] = useReducer(AlertReducer, initialState);

	// Set Loading
	const setAlert = (isEmptySearchText) => {
		// Other approach is to remove the alert after a few seconds using setTimout
		// setTimeout(() => this.setState({alert: null}), 5000)
		if (isEmptySearchText) {
			dispatch({ type: SET_ALERT, payload: { message: 'Please enter a search text', type: 'light' } });
		} else {
			dispatch({ type: REMOVE_ALERT });
		}
	};
	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert
			}}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
