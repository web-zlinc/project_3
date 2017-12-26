import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'

import {Provider} from 'react-redux'
import store from './redux/configStore.js'

// 引入蚂蚁金服
import {DatePicker} from 'antd';
import 'antd/dist/antd.css';
import './basescss/base.scss'
import Rem from './getRem/getRem.js'

import HomeComponent from './components/home/homeComponent'
import MerryComponent from './components/home/marryCms/merry'
import Cart from './components/shoppingCart/shoppingCartComponent'
import CartOrder from "./components/cartOrder/cartOrderComponent.js";
import Pay from "./components/pay/payComponent.js";
import ClassifyComponent from './components/csm/classify/classifyComponent.js'
import AllShow from './components/csm/allShow/allShowComponent.js'
import Login from './components/login/loginComponent'

import Myorchard from './components/myorchard/myorchardComponent';
import Personal from './components/personal/personalComponent';

import Main from "./components/commonComponent/commonFoot";
import SearchComponent from "./components/commonComponent/commonSearch";


import Classify_list from './components/csm/classify_list/classify_list.js'
import Details from './components/csm/commonDetails/commonDetails.js'


import Myorder from './components/myorder/myorderComponent'
import Favorite from './components/myorchard/favorite/MyfavoriteComponent'

Rem.rem();
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/login" component={Login}/>
            <Route path="/myorchard" component={Myorchard}/>
            <Route path="/myorchard/personal" component={Personal}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/pay" component={Pay}/>
            <Route path="/cartOrder" component={CartOrder}/>
            <Route path="/myorder" component={Myorder}/>
            <Route path="/search" component={SearchComponent} />

            <Route path="/classify" component={ClassifyComponent}/>
            <Route path="/classify/classify_list(/:name)(/:type)" component={Classify_list}/>
            <Route path="/classify/classify_list(/:name)(/:type)" component={Classify_list}/>



            <Route path="/(/:status)" component={HomeComponent} />
            <Route path="/merry" component={MerryComponent} />
            <Route path="/myorchard/favorite" component={Favorite}/>
            <Route path="/classify_list/details(/:gid)" component={Details}/>
        </Router>
    </Provider>
    ,document.getElementById('app'))


     


