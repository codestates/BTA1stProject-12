import {useCelo} from '@celo/react-celo';
import {Bip39, RandomNumberGenerator} from '@celo/base';
import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const clickEvent = () => {
    console.log("Call Click Event");

    axios.get("/api/generateAccount")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  

  return (
    <div className="App">
      <button onClick={() => clickEvent()}>button</button>
    </div>
  );
}

export default App;
