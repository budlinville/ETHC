import React from 'react';
import './App.css';

import Header from './components/Header';
import EthTextboxContainer from './components/EthTextboxContainer';

const App = () => {
    return (
        <div className="App">
          <Header />
          <EthTextboxContainer />
        </div>
    );
};

export default App;
