import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


sessionStorage.clientID = sessionStorage.clientID ? sessionStorage.clientID : btoa(Date.now()+Math.random());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);