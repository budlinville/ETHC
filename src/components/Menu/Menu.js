import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import { makeStyles } from '@mui/styles';

import Home from './Home';
import Support from './Support';
import Settings from './Settings';


const PageComponent = ({ page, setPage }) => {
    switch(page) {
        case 'home':
            return <Home setPage={setPage} />;
        case 'support':
            return <Support setPage={setPage} />;
        case 'settings':
            return <Settings setPage={setPage} />;
        default:
            return <Home setPage={setPage} />;
    }
};


const Menu = ({ visible, anchorEl }) => {
    const classes = useStyles();
    const [page, setPage] = useState('home');

    return (
        <>
            <Popper
                open={visible}
                anchorEl={anchorEl}
                className={classes.popper}
            >
                <PageComponent page={page} setPage={setPage} />
            </Popper>
        </>
    );
};


const useStyles = makeStyles(theme => ({
    popper: {
        zIndex: 1,
        background: 'linear-gradient(midnightblue, rgba(25, 25, 135, 0.9) 70%, transparent 250%)',
        color: 'white',
        borderRadius: '0 0 10px 10px',
        width: '100%',
        maxWidth: 340,
        borderBottom: '3px solid black'
    },
    ethPrice: {
        left: 80
    }
}));

export default Menu;
