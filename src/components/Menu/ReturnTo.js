import React from 'react';
import { Toolbar, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Icon from '@mui/material/Icon';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';



const ReturnTo = ({ setPage, returnToPage }) => {
	const classes = useStyles();

    const handleIconClick = () => {
		setPage(returnToPage);
	};

    return (
        <IconButton onClick={ handleIconClick } style={{ color: 'white', marginRight: '10px' }}>
            <KeyboardReturnIcon style={{ color: 'white' }}/>
        </IconButton>
    );
}


const useStyles = makeStyles(theme => ({

}));


export default ReturnTo;