import {combineReducers} from 'redux'
<<<<<<< HEAD
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
})
=======

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

>>>>>>> 6013d2a6ce0fcd0ab259f7978f2858f30de9ba5e
