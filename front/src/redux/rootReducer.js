import {combineReducers} from 'redux'


import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer'
import cart from '../components/shoppingCart/shoppingCartReducer';
import cartOrder from '../components/cartOrder/cartOrderReducer';
import getOrder from '../components/pay/payReducer.js';
import searchFruit from '../components/commonComponent/searchReducer';

import login from '../components/myorchard/login/loginReducer'
import myorder from '../components/myorchard/myorder/myorderReducer';


import save from '../components/myorchard/personal/personalReducer';
import favorite from '../components/favorite/favoriteReducer';
import searchRecommend from '../components/home/recommend/recommendReducer';
import details from '../components/csm/commonDetails/detailsReducer.js'

export default combineReducers({
    login,
    datagrid,
    allshow,
    cart,
    favorite,
    searchFruit,
    myorder,
    searchRecommend,
    cartOrder,
    getOrder,
    save,
    details
})

