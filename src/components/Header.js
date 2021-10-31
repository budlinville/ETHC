import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { makeStyles } from '@mui/styles';

const Header = ({ height }) => {
	const classes = useStyles();
  return (
        <Toolbar className={ classes.header } style={{ minHeight: height }}>
          <Typography variant="h6" component="div">
						ETHC
					</Typography>
          <IconButton
            size="5px"
            edge="start"
            color="inherit"
            aria-label="menu"
						onClick={ () => window.close() }
          >
						<ExitToAppIcon />
					</IconButton>
        </Toolbar>
  );
}

const useStyles = makeStyles(theme => ({
	header: {
		backgroundColor: '#256DAB',
		display: 'flex',
		justifyContent: 'space-between'
	}
}));

export default Header;