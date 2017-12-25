import React from 'react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';

import MainComponent from '../components/main/mainComponent';//引入主页面组件
import ProductsComponent from '../components/products/productsComponent';//引入产品表组件
import LoginComponent from '../components/login/loginComponent';//引入登录页面组件
import AdministratorComponent from '../components/administrator/administratorComponent';//管理表组件
import AppriaseComponent from '../components/appraise/appraiseComponent';//评论表组件
import OrderComponent from '../components/order/orderComponent';//订单表组件
import ShoppingCartComponent from '../components/shoppingcart/shoppingcartComponent';//购物车表组件
import UserComponent from '../components/user/userComponent';//用户表组件

export default(
    <div>
        <Route path='/login' component={LoginComponent} ></Route>
        <Route path='/' component={MainComponent} >
            <IndexRoute component={ProductsComponent} ></IndexRoute>
            <Route path='products' component={ProductsComponent} ></Route>
            <Route path='administrator' component={AdministratorComponent} ></Route>         
            <Route path='appraise' component={AppriaseComponent} ></Route>
            <Route path='order' component={OrderComponent} ></Route>
            <Route path='shoppingcart' component={ShoppingCartComponent} ></Route>
            <Route path='user' component={UserComponent} ></Route>
        </Route>
    </div>
)