import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';

import ReturnTo from './ReturnTo';
import { ethContext } from '../ContextProvider';

import data from '../../data/units';
import { writeToChromeStorage } from '../../chrome/storage';


const FavoriteItem = ({ checked, toggleItem, label, id }) => {
    const classes = useStyles();

    return (
        <div className={classes.favoritesItem}>
            <Checkbox
                checked={checked}
                onChange={() => toggleItem(id, checked)}
                style={{ color: 'white', padding: 3 }}
            />
            <Typography variant='body1'>
                {label}
            </Typography>
        </div>
    )
};


const Settings = ({ setPage }) => {
    const classes = useStyles();
    const [favorites, setFavorites] = useContext(ethContext);

    const toggleChecked = (id, checked) => {
        const newFavorites =  checked
            ? [...favorites.filter(item => item !== id)]
            : favorites.concat(id)
        setFavorites(newFavorites);
        writeToChromeStorage('highlighted', newFavorites);
    };

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <ReturnTo setPage={setPage} returnTopPage='home' />
                <Typography variant='h6'>
                    Settings
                </Typography>
            </div>

            <Typography variant='h5'>
                Favorites
            </Typography>

            { data.map( unit => (
                <FavoriteItem
                    checked={ favorites.includes(unit.id) }
                    toggleItem={ toggleChecked }
                    label={unit.name}
                    id={unit.id}
                />
            ))}
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
    favoritesItem: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
    }
}));

export default Settings;
