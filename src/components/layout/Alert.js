//racf shortcut
import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

function Alert() {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;
	return (
		alert !== null && (
			<div className={`alert-${alert.type}`}>
				<i className='fas fa-info-circle'>{alert.message}</i>
			</div>
		)
	);
}

export default Alert;
