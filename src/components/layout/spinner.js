import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	return (
		<Fragment>
			<img src={spinner} style={{ width: '12.25rem', margin: 'auto', display: 'block' }} alt='Loading...' />
		</Fragment>
	);
};
export default Spinner;
