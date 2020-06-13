import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './root/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
 
  <Router >
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Router>
 ,
  document.getElementById('root')
);

serviceWorker.unregister();
