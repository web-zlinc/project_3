import {combineReducers} from 'redux'

import login from '../components/login/loginReducer'
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer'
import cart from '../components/shoppingCart/shoppingCartReducer';
import cartOrder from '../components/cartOrder/cartOrderReducer';
import getOrder from '../components/pay/payReducer.js';
import searchFruit from '../components/commonComponent/searchReducer'


import myorder from '../components/myorder/myorderReducer'

import searchRecommend from '../components/home/recommend/recommendReducer'

export default combineReducers({
    login,
    datagrid,
    allshow,
    cart,
    searchFruit,
    myorder,
    searchRecommend,
    cartOrder,
    getOrder
})

