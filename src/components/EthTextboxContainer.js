import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import BigNumber from "bignumber.js";

import EthTextbox from './EthTextbox';

import data from '../data/units';

const EthTextboxContainer = () => {
	const classes = useStyles();
	const [wei, setWei] = useState(BigNumber(1000000000000000000));

	const EthFields = data.map( unit => (
		<EthTextbox
			id={unit.id}
			name={unit.name}
			factor={unit.factor}
			isPopular={'isPopular' in unit}
			wei={wei}
			setWei={setWei}
		/>
	));

	return (
		<div className={classes.root}>
			{ EthFields }
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: '0.5em',
		paddingBottom: '1em'
	}
}));

export default EthTextboxContainer;