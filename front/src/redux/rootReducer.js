import {combineReducers} from 'redux'

import login from '../components/login/loginReducer'
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer'
import cart from '../components/shoppingCart/shoppingCartReducer';
import searchFruit from '../components/commonComponent/searchReducer'
export default combineReducers({
    login,
    datagrid,
    allshow,
    cart,
    searchFruit

})

