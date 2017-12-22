import {combineReducers} from 'redux'
<<<<<<< HEAD
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer.js'
import searchFruit from '../components/commonComponent/searchReducer'

export default combineReducers({
    datagrid,
    allshow,
    searchFruit
=======
import login from '../components/login/loginReducer'
import cart from '../components/shoppingCart/shoppingCartReducer';
import allshow from '../components/csm/allShow/allShowReducer.js'


export default combineReducers({
    cart,
    allshow,
    login
>>>>>>> 10d7e9e7b0df1b74e8c6cb527f4de342f40491b8
})