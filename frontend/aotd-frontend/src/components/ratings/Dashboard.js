import React, { Fragment } from 'react';
import Form from './Form'; 
import Albums from './Albums';

export default function Dashboard() {
	return (
		<Fragment>
			<Form />
			<Albums />
		</Fragment>
	)
}
