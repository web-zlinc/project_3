import {combineReducers} from 'redux'
<<<<<<< HEAD

import login from '../components/login/loginReducer'
=======
<<<<<<< HEAD

import login from '../components/login/loginReducer'
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer'

export default combineReducers({
    login,
    datagrid,
    allshow


=======
<<<<<<< HEAD
>>>>>>> a21b88538d01544589254ffbe3af92e7268372bd
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer.js'
import searchFruit from '../components/commonComponent/searchReducer'
import cart from '../components/shoppingCart/shoppingCartReducer';

export default combineReducers({
    datagrid,
    allshow,
<<<<<<< HEAD
    searchFruit,
    login,
    cart
=======
    login
>>>>>>> 10d7e9e7b0df1b74e8c6cb527f4de342f40491b8
>>>>>>> 48317008fd1ed6146b587b8eab7034fa3aa7f126
>>>>>>> a21b88538d01544589254ffbe3af92e7268372bd
})