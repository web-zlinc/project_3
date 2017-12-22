import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'
<<<<<<< HEAD
import {Provider} from 'react-redux';
import store from './redux/configStore'

=======
import {Provider} from 'react-redux'
import store from './redux/configStore.js'
>>>>>>> b0fb505c98172353c94315aa238c431c0dffeba1
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

<<<<<<< HEAD
=======


>>>>>>> 8fa10f40af010e0848fc4655d985dca10d3f53bb
Rem.rem();
ReactDOM.render(
    <Provider store={store}>
<<<<<<< HEAD
        <Router history={hashHistory}>
            <Route path="/Classify" component={ClassifyComponent}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/login" component={Login}/>

            <Route path="/myorchard" component={Myorchard}/>
            <Route path="/personal" component={Personal}/>

            <Route path="/search" component={SearchComponent} />
            <Route path="/" component={Main} />

        </Router>
    </Provider>
    ,document.getElementById('app'))
=======
    <Router history={hashHistory}>
        <Route path="/home" component={HomeComponent} />
        <Route path="/login" component={Login}/>
        <Route path="/search" component={SearchComponent} />
        <Route path="/" component={Main} />
        <Route path="/classify" component={ClassifyComponent}>
        </Route>
        <Route path="/cart" component={Cart}/>
    </Router>
    </Provider>,document.getElementById('app'))
>>>>>>> b0fb505c98172353c94315aa238c431c0dffeba1

     


