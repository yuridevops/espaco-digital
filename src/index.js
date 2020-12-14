import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Espaco';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

