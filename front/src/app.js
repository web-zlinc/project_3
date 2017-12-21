import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'

// 引入蚂蚁金服
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './basescss/base.scss'
import Rem from './getRem/getRem.js'

import Cart from './components/shoppingCart/shoppingCartComponent'
import ClassifyComponent from './components/csm_classify/classifyComponent.js'
import Login from './components/login/loginComponent'
import Main from "./components/commonComponent/commonFoot";
import SearchComponent from "./components/commonComponent/commonSearch";


Rem.rem();
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/Classify" component={ClassifyComponent}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/login" component={Login}/>
        <Route path="/search" component={SearchComponent} />
        <Route path="/" component={Main} />
    </Router>,document.getElementById('app'))

     


