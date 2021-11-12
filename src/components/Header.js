import React from 'react';
import { Toolbar, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Header = () => {
	const classes = useStyles();
  return (
        <Toolbar className={ classes.header } style={{ minHeight: '30px' }}>
					<IconButton onClick={ () => {} }>
						<img src="ethc.svg" alt="logo" className={classes.logo} />
					</IconButton>
        </Toolbar>
  );
}

const useStyles = makeStyles(theme => ({
	header: {
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		borderBottom: '1px solid #FF6D24'
	},
	logo: {
		margin: '1px',
		height: '35px',
		width: '35px'
	}
}));

export default Header;