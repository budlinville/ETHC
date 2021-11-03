import React from 'react';
import { Toolbar, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Header = () => {
	const classes = useStyles();
  return (
        <Toolbar className={ classes.header } style={{ minHeight: '30px' }}>
					<IconButton onClick={ () => {} }>
						<img src="logo_color_32.png" alt="logo" className={classes.logo} />
					</IconButton>
        </Toolbar>
  );
}

const useStyles = makeStyles(theme => ({
	header: {
		backgroundColor: '#256DAB',
		display: 'flex',
		justifyContent: 'center'
	},
	logo: {
		margin: '2px'
	}
}));

export default Header;