import { CeloProvider } from '@celo/react-celo';
import '@celo/react-celo/lib/styles.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CeloProvider dapp={{name:"Ensemble", description:"HelloCelo Ensemble"}}>
      <App />
    </CeloProvider>
  </React.StrictMode>
);
