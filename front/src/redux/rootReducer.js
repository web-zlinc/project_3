import {combineReducers} from 'redux'
<<<<<<< HEAD


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
=======
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
>>>>>>> 80642f993a0bde109ea299306c7dc5923f458550
