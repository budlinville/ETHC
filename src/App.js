import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import EthTextboxContainer from './components/EthTextboxContainer';
import Background from './components/Background';
import ContextProvider from './components/ContextProvider';


const App = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const closeMenu = () => {
      setMenuVisible(false);
      setAnchorEl(null);
    }

    const toggleVisible = () => setMenuVisible(state => setMenuVisible(!state));
    return (
      <ContextProvider>
        <Background>
          <div id="App">
            <Header
              menuVisible={menuVisible}
              setMenuVisible={toggleVisible}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
            />
            <EthTextboxContainer closeMenu={closeMenu} />
          </div>
        </Background>
      </ContextProvider>
    );
};

export default App;
