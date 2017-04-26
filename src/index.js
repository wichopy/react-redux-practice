import 'babel-polyfill'; //babel transpiles ES6 to ES5, set of fetures in ES6 that babel can't compile so need ot use this. Could individually polyfill sections that babel doesnt polyfill.
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import {loadAuthors} from './actions/authorActions'
import './styles/styles.css'; //webpack can import css too!!!!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
//{courses:[{title:'butt'},{title: 'farts'}]}
render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);