import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, InputAdornment } from '@mui/material';

const EthTextbox = ({ id, name, factor, isPopular }) => {
	const classes = useStyles();
	return (
		<div>
			<TextField
				label={name}
				id={id}
				size='small'
				sx={{ mt: 1, width: '75%' }}
				InputProps={{
					endAdornment: <InputAdornment position="end">{ name.toLowerCase() }</InputAdornment>
				}}
			/>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	textbox: {
	}
}));

export default EthTextbox;
