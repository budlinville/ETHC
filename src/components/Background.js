import React from 'react';
import { makeStyles } from '@mui/styles';



const Background = ({ children }) => {
	const classes = useStyles();

	return (
    <div className={classes.body}>
		{children}
    </div>
	);
};

const useStyles = makeStyles(theme => ({
	body: {
    	background: 'linear-gradient(#e1e3eb -10%, white 50%, #e1e3eb)'
  	}
}));

export default Background;
