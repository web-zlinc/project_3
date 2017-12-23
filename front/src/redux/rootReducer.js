import {combineReducers} from 'redux'
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer'
import searchFruit from '../components/commonComponent/searchReducer'
import login from '../components/login/loginReducer'
import cart from '../components/shoppingCart/shoppingCartReducer';

export default combineReducers({
    datagrid,
    allshow,
    searchFruit,
    cart,
    login
