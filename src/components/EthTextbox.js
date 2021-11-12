import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BigNumber from "bignumber.js";

const CopyButton = ({ isPopular, unit, value }) => {
	const classes = useStyles();
	return (
		<>
			{isPopular ? <InputAdornment position="end">{unit}</InputAdornment> : '' }
			<IconButton onClick={ () => navigator.clipboard.writeText(value) }>
				<ContentCopyIcon className={classes.copyIcon} />
			</IconButton>
		</>
	);
};

const EthTextbox = ({ id, name, factor, isPopular, wei, setWei }) => {
	const classes = useStyles();

	const displayValue = isNaN(wei) ? BigNumber(0) : wei.dividedBy(BigNumber(10).pow(factor));
	const convertToWei = value => isNaN(value) ? BigNumber(0) : BigNumber(value).multipliedBy(BigNumber(10).pow(factor));

	return (
		<div>
			<TextField
				label={isPopular ? '' : name}
				id={id.toString()}
				sx={{ mt: 1 }}
				value={displayValue}
				className={classes.textbox}
				onChange={ event => setWei(convertToWei(event.target.value))}
				size='small'
				InputProps={{
					endAdornment: <CopyButton isPopular={isPopular} unit={name.toLowerCase()} value={displayValue} />,
					_depr: { /*classes: { input: classes.textbox } */},
					classes: isPopular ? {
						root: classes.cssOutlinedInput,
						focused: classes.cssFocused,
						notchedOutline: classes.notchedOutline
					} : {
						notchedOutline: classes.notchedUnpopular
					}
				}}
			/>
		</div>
	);
};

const useStyles = makeStyles({
	copyButton: {
		height: '5px',
		width: '5px'
	},
	copyIcon: {
		transform: 'scale(0.6)'
	},
	textbox: {
		width: '90%'
	},
	cssOutlinedInput: {
		backgroundColor: '#14D94D !important'
	},
	cssFocused: {
		backgroundColor: '#12C747 !important'
	},
	notchedOutline: {
		border: '2px solid #00A330 !important'
	},
	notchedUnpopular: {
		borderColor: '#FF6D24 !important'
	}
});

export default EthTextbox;
