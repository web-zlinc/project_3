import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import 'antd/dist/antd.css'; //引入蚂蚁金服的样式

import store from './redux/configStore';
import routes from './router/rootRouter';
import './basescss/base.scss';//引入基础样式

import './app.scss';

ReactDOM.render(
    <Provider store = {store}>
        <Router history ={hashHistory} routes= {routes} >
        </Router>
    </Provider>
    ,document.getElementById('app')
)