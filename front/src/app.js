import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'
<<<<<<< HEAD
import {Provider} from 'react-redux'
import store from './redux/configStore.js'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Provider} from 'react-redux'
import store from './redux/configStore.js'
=======
>>>>>>> 48317008fd1ed6146b587b8eab7034fa3aa7f126

import {Provider} from 'react-redux';
import store from './redux/configStore'


<<<<<<< HEAD
=======
>>>>>>> 10d7e9e7b0df1b74e8c6cb527f4de342f40491b8
>>>>>>> 48317008fd1ed6146b587b8eab7034fa3aa7f126
>>>>>>> a21b88538d01544589254ffbe3af92e7268372bd
// 引入蚂蚁金服
import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';
// import './basescss/base.scss'
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
import Classify_list from './components/csm/classify_list/classify_list.js'

<<<<<<< HEAD
=======
<<<<<<< HEAD


Rem.rem();
ReactDOM.render(
    <Provider store={store}>
<<<<<<< HEAD

=======
>>>>>>> 48317008fd1ed6146b587b8eab7034fa3aa7f126
        <Router history={hashHistory}>
            <Route path="/classify" component={ClassifyComponent}/>
            <Route path="/cart" component={Cart}/>
             <Route path="/myorchard/personal(/:pagenumber)" component={Personal}/>
            <Route path="/myorchard" component={Myorchard} />
             
            <Route path="/login" component={Login}/>
<<<<<<< HEAD
            <Route path="/search" component={SearchComponent} />
            <Route path="/" component={Main} />
            
            <Route path="/home" component={HomeComponent} />
            
            <Route path="/cart" component={Cart}/>
=======
            <Route path="/home" component={HomeComponent} />
            <Route path="/myorchard" component={Myorchard}/>
            <Route path="/personal" component={Personal}/>

            <Route path="/search" component={SearchComponent} />
            <Route component={Main} />
=======
>>>>>>> a21b88538d01544589254ffbe3af92e7268372bd
Rem.rem();
ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/login" component={Login}/>
        <Route path="/search" component={SearchComponent} />
        <Route path="/home" component={HomeComponent} />
        <Route path="/" component={Main} />
        <Route path="/classify" component={ClassifyComponent}/>
        <Route path="/classify/classify_list(name)" component={Classify_list}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/myorchard" component={Myorchard}/>
        <Route path="/personal" component={Personal}/>
<<<<<<< HEAD
=======
>>>>>>> 10d7e9e7b0df1b74e8c6cb527f4de342f40491b8
>>>>>>> 48317008fd1ed6146b587b8eab7034fa3aa7f126
>>>>>>> a21b88538d01544589254ffbe3af92e7268372bd

        </Router>
    </Provider>
    ,document.getElementById('app'))
<<<<<<< HEAD

    

=======
>>>>>>> 48317008fd1ed6146b587b8eab7034fa3aa7f126

     


