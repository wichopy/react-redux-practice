import 'babel-polyfill'; //babel transpiles ES6 to ES5, set of fetures in ES6 that babel can't compile so need ot use this. Could individually polyfill sections that babel doesnt polyfill.
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //webpack can import css too!!!!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);