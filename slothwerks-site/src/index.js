import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// Import components
import App from './app';

// Note:  we are wrapping our app in a BrowserRouter component
// provided by [React Router](https://reacttraining.com/react-router/).

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
);
