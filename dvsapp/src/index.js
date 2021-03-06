import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line
import { createStore, applyMiddleware, Provider } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {BrowserRouter as Router} from 'react-router-dom'
import { BudgetProvider } from './data'

// eslint-disable-next-line
const store = createStore(
    applyMiddleware(thunk,logger)
)

ReactDOM.render(
    <Router>
        <BudgetProvider>
            <App />
        </BudgetProvider>
   </Router>   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();