import React from 'react';
import { Toolbar, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Menu from './Menu/Menu';

const Header = ({ menuVisible, setMenuVisible, anchorEl, setAnchorEl }) => {
	const classes = useStyles();

	const handleIconClick = event => {
		setMenuVisible();
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	return (
		<>
			<Toolbar className={ classes.header } style={{ minHeight: '30px' }}>
				<IconButton onClick={ handleIconClick } style={{ color: 'white', }}>
					<img src="big.png" alt="logo" className={classes.logo} />
				</IconButton>
			</Toolbar>
			<Menu visible = { menuVisible } anchorEl={anchorEl} />
		</>
  	);
}

const useStyles = makeStyles(theme => ({
	header: {
		background: 'linear-gradient(black 25%, midnightblue)',
		display: 'flex',
		justifyContent: 'center',
		borderBottom: '1px solid #e1e3eb',
		overflow: 'hidden',
	},
	logo: {
		padding: 0,
		height: 'auto',
		width: '50px',
	},
	// iconHoverFocus: {
	// 	"&:hover, &.Mui-focusVisible": { backgroundColor: "yellow" }
	// }
}));

export default Header;