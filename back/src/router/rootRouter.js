import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import MainComponent from '../components/main/mainComponent';//引入主页面组件
import ProductsComponent from '../components/products/productsComponent';//引入产品表组件

export default(
    <Route path='/' component={MainComponent} >
        <Route path='products' component={ProductsComponent} ></Route>
    </Route>
)