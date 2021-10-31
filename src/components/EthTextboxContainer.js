import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

import EthTextbox from './EthTextbox';

import data from '../data/units';

const EthTextboxContainer = () => {
	const EthFields = data.map( unit => (
		<EthTextbox
			id={unit.id}
			name={unit.name}
			factor={unit.factor}
			isPopular={'isPopular' in unit}
		/>
	));

	return (
		<div>
			{ EthFields }
		</div>
	);
};

const useStyles = makeStyles(theme => ({

}));

export default EthTextboxContainer;