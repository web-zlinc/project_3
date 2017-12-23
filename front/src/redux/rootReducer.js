import {combineReducers} from 'redux'

import login from '../components/login/loginReducer'
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer.js'
import searchFruit from '../components/commonComponent/searchReducer'
import cart from '../components/shoppingCart/shoppingCartReducer';

export default combineReducers({
    datagrid,
    allshow,
    searchFruit,
    login,
    cart
})