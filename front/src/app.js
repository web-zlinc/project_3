import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'
import Rem from './getRem/getRem.js'
import './basescss/base.scss'
import ClassifyComponent from './components/csm_classify/classifyComponent.js'
// 引入蚂蚁金服
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import Cart from './components/shoppingCart/shoppingCartComponent'

Rem.rem();
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ClassifyComponent}/>
        <Route path="/cart" component={Cart}/>
    </Router>,document.getElementById('app'))

     


