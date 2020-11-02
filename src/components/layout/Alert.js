//racf shortcut
import React from 'react';

function Alert({ alert }) {
	return (
		alert !== null && (
			<div className={`alert-${alert.type}`}>
				<i className='fas fa-info-circle'>{alert.message}</i>
			</div>
		)
	);
}

export default Alert;
