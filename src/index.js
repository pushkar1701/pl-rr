import 'babel-polyfill';
import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import './assets/styles/styles.scss';

const store = configureStore();
render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
        document.getElementById('resume-wrapper')
);