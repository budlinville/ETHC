import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BigNumber from "bignumber.js";

const CopyButton = ({ highlighted, unit, value }) => {
	const classes = useStyles();
	return (
		<>
			{ highlighted
				? <InputAdornment position="end">
					{unit}
				</InputAdornment>
				: ''
			}
			<IconButton onClick={ () => navigator.clipboard.writeText(value) }>
				<ContentCopyIcon className={classes.copyIcon} />
			</IconButton>
		</>
	);
};

const EthTextbox = ({ id, name, factor, highlighted, wei, setWei }) => {
	const classes = useStyles();

	const displayValue = isNaN(wei) ? BigNumber(0) : wei.dividedBy(BigNumber(10).pow(factor));
	const convertToWei = value => isNaN(value) ? BigNumber(0) : BigNumber(value).multipliedBy(BigNumber(10).pow(factor));

	return (
		<div>
			<TextField
				label={highlighted ? '' : name}
				id={id.toString()}
				sx={{ mt: 1 }}
				value={displayValue}
				className={classes.textbox}
				onChange={ event => setWei(convertToWei(event.target.value))}
				size='small'
				InputProps={{
					endAdornment: <CopyButton highlighted={highlighted} unit={name.toLowerCase()} value={displayValue} />,
					_depr: { /*classes: { input: classes.textbox } */},
					classes: highlighted ? {
						root: classes.cssRoot,
						focused: classes.cssFocused,
						notchedOutline: classes.notchedOutline
					} : {
						focused: classes.cssFocusedNotHighlighted,
						notchedOutline: classes.notchedNotHighlighted
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
		width: '90%',
		color: 'white'
	},
	cssRoot: {
		background: 'linear-gradient(transparent 0%, #1976d2 500%)',
		color: 'white'
	},
	cssFocused: {
		background: 'linear-gradient(midnightblue -300%, transparent 90%)',
	},
	notchedOutline: {
		border: '1px solid #d3d4db !important'
	},
	notchedNotHighlighted: {
		borderColor: '#d3d4db !important'
	},
	cssFocusedNotHighlighted: {
		background: 'linear-gradient(white -10%, #d3d4db 200%)',
	}
});

export default EthTextbox;
