import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'
import Rem from './getRem/getRem.js'
import './basescss/base.scss'
import ClassifyComponent from './components/csm_classify/classifyComponent.js'

<<<<<<< HEAD
Rem.rem();
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ClassifyComponent}/>
    </Router>,document.getElementById('app'))
=======
// 引入蚂蚁金服
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import Cart from './components/shoppingCart/shoppingCartComponent'



     
ReactDOM.render(<Cart/>, document.getElementById('app'));
>>>>>>> cbe7c7571b765af7d97d9d5e54a16dcea7919d26
