import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [status, setStatuts] = useState(1);
  
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
