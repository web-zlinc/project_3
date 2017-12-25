import React from 'react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';

import MainComponent from '../components/main/mainComponent';//引入主页面组件
import ProductsComponent from '../components/products/productsComponent';//引入产品表组件
import LoginComponent from '../components/login/loginComponent';//引入登录页面组件

export default(
    <div>
        <Route path='/login' component={LoginComponent} ></Route>
        <Route path='/' component={MainComponent} >
            <IndexRoute component={ProductsComponent} ></IndexRoute>
            <Route path='products' component={ProductsComponent} ></Route>
        </Route>
    </div>
)