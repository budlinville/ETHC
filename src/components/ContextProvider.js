import { createContext, useState, useEffect } from 'react';

import data from '../data/units';
import { writeToChromeStorage } from '../chrome/storage';

export const ethContext = createContext();


const ContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Starter highlights loaded from /data
        const dataFavorites = data.reduce( (acc, cur) => {
            return 'highlighted' in cur
                ? acc.concat(cur.id)
                : acc;
        }, []);

        if (process.env.NODE_ENV === "production") {
            chrome.storage.sync.get('highlighted', items => {
                const syncedFavorites = items.highlighted;

                if (!syncedFavorites) {  // favorites not synced
                    writeToChromeStorage('highlighted', dataFavorites);
                    setFavorites(dataFavorites);
                } else {  // favorites already synced
                    setFavorites(syncedFavorites);
                }
            });
        } else {  // DEV (//localhost:3000)
            setFavorites(dataFavorites);
        }


    }, [data, writeToChromeStorage]);

    return (
        // this is the provider providing state
        <ethContext.Provider value={[favorites, setFavorites]}>
            {children}
        </ethContext.Provider>
    );
};

export default ContextProvider;
