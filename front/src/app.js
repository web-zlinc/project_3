import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'

// 引入蚂蚁金服
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import Cart from './components/shoppingCart/shoppingCartComponent'



     
ReactDOM.render(<Cart/>, document.getElementById('app'));