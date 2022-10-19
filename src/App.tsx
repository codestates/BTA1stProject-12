import {useCelo} from '@celo/react-celo';
import {Bip39, RandomNumberGenerator} from '@celo/base';
import React from 'react';
import './App.css';

function App() {
  
  const clickEvent = () => {
    console.log("HI");
  }

  

  return (
    <div className="App">
      <button onClick={() => clickEvent()}>button</button>
    </div>
  );
}

export default App;
