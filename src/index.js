import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { browserHistory } from 'react-router';
//import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './routes';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
