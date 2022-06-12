import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import RecommendIcon from '@mui/icons-material/Recommend';
import { makeStyles } from '@mui/styles';

import { fetchEthPrice } from '../../api/coinGecko';
import { Typography } from '@mui/material';

const Home = ({ setPage }) => {
    const classes = useStyles();

    const [ethPrice, setEthPrice] = useState(0.0);
    const [updatedTs, setUpdatedTs] = useState(null);

    useEffect(() => {
        const _getEthPrice = async () => {
            const { price, time } = await fetchEthPrice();
            setEthPrice(price);
            setUpdatedTs(time);
        }

        const ONE_MINUTE = 60000
    
         _getEthPrice();
         const ethPriceInterval = setInterval(() => _getEthPrice(), ONE_MINUTE);

         return () => clearInterval(ethPriceInterval);

    }, [fetchEthPrice, setEthPrice]);
    
    return (
        <>
            <List>
                <ListItem className={classes.ethPrice} disablePadding>
                    <div className={classes.priceContainer}>
                        <Typography>
                            {`Eth Price | $${ethPrice}`}
                        </Typography>
                        <Typography>
                            <p style={{ fontSize: '10px', margin: 0, marginLeft: '10px' }}>{` (updated ${updatedTs})`}</p>  
                        </Typography>
                    </div>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => setPage('support')}>
                        <ListItemIcon>
                            <RecommendIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Support" className={classes.linkText} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setPage('settings')}>
                        <ListItemIcon>
                            <SettingsIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Settings" className={classes.linkText} />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    );
};


const useStyles = makeStyles(theme => ({
    ethPrice: {
        color: 'white',
        textShadow: 'black 0px 0 5px'
    },
    linkText: {
        color: 'white',
        textShadow: 'black 0px 0 5px'
    },
    icon: {
        color: 'white'
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
}));

export default Home;
