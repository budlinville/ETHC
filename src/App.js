import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import EthTextboxContainer from './components/EthTextboxContainer';

const App = () => {
    const HEADER_HEIGHT = '30px';
    return (
        <div className="App">
          <Header height={HEADER_HEIGHT} />
          <EthTextboxContainer />
        </div>
    );
};

export default App;
