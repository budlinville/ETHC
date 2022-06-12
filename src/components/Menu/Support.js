import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";

import ReturnTo from './ReturnTo';


const Support = ({ setPage }) => {
    const CHROME_LINK = 'https://chrome.google.com/webstore/detail/ethc/okaokkkemdakdkhdnmgejnlolhnmpibl';
    const GITHUB_LINK = 'https://github.com/budlinville/ETHC/issues';
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <ReturnTo setPage={setPage} returnTopPage='home' />
                <Typography variant='h6'>
                    Support
                </Typography>
            </div>
            <Typography variant='body1'>
                Sup y'all, if you found this extension useful, 
                please leave a review!
            </Typography>
            <a href={CHROME_LINK} target="_blank">
                <button className={classes.button}>
                    <Typography variant='body2'>
                        Chrome Webstore
                    </Typography>
                </button>
            </a>

            <Typography variant='body1'>
                If you have any requests for additional functionality,
                please submit an issue on Github.
            </Typography>
            <a href={GITHUB_LINK} target="_blank">
                <button className={classes.button}>
                    <Typography variant='body2'>
                        Github
                    </Typography>
                </button>
            </a>
        </div>
    );
};


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px 15px 15px 15px'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    link: {
        textShadow: 'midnightblue 0 0 5px',
        color: 'white'
    },
    button: {
        textDecoration: 'none',
        color: '#000',
        backgroundColor: 'white',
        cursor: 'pointer',
        border: '2px solid',
        padding: '0.5em 0.5em',
        margin: '15px',
        boxShadow: '0 2px 0 0 black',
        position: 'relative',
        borderRadius: '5px',
        "&:hover": {
            backgroundColor: '#e1e3eb'
        },
        "&:active": {
            top: '2px',
            boxShadow: 'inset 0 0 2px black'
        }
    }
}));

export default Support;
