import {combineReducers} from 'redux'

import login from '../components/login/loginReducer'
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer'
import cart from '../components/shoppingCart/shoppingCartReducer';
import searchFruit from '../components/commonComponent/searchReducer'


import myorder from '../components/myorder/myorderReducer'
import save from '../components/personal/personalReducer'
import favorite from '../components/myorchard/favorite/favoriteReducer'
import searchRecommend from '../components/home/recommend/recommendReducer'


export default combineReducers({
    login,
    datagrid,
    allshow,
    cart,
    favorite,
    searchFruit,
    myorder,
    save,
    searchRecommend
})

