import React, { useState, useContext } from 'react';
import { makeStyles } from '@mui/styles';
import BigNumber from "bignumber.js";

import EthTextbox from './EthTextbox';
import { ethContext } from './ContextProvider';

import data from '../data/units';

const EthTextboxContainer = ({ closeMenu }) => {
	const classes = useStyles();
	const [wei, setWei] = useState(BigNumber(1000000000000000000));
	const [favorites, setFavorites] = useContext(ethContext);

	const EthFields = data.map( unit => (
		<EthTextbox
			id={unit.id}
			name={unit.name}
			factor={unit.factor}
			highlighted={ favorites.includes(unit.id) }
			wei={wei}
			setWei={setWei}
		/>
	));

	return (
		<div className={classes.root} onClick={closeMenu}>
			{ EthFields }
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: '0.5em',
		paddingBottom: '1em',
		boxShadow: 'changeme'
	}
}));

export default EthTextboxContainer;