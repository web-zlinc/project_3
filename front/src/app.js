import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import store from './redux/configStore.js'
// 引入蚂蚁金服
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './basescss/base.scss'
import Rem from './getRem/getRem.js'
import HomeComponent from './components/home/homeComponent'
import Cart from './components/shoppingCart/shoppingCartComponent'
import ClassifyComponent from './components/csm/classify/classifyComponent.js'
import AllShow from './components/csm/allShow/allShowComponent.js'
import Login from './components/login/loginComponent'

import Myorchard from './components/myorchard/myorchardComponent';
import Personal from './components/personal/personalComponent';

import Main from "./components/commonComponent/commonFoot";
import SearchComponent from "./components/commonComponent/commonSearch";



Rem.rem();
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/Classify" component={ClassifyComponent}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={HomeComponent} />
            <Route path="/myorchard" component={Myorchard}/>
            <Route path="/personal" component={Personal}/>

            <Route path="/search" component={SearchComponent} />
            <Route component={Main} />

        </Router>
    </Provider>
    ,document.getElementById('app'))

     


