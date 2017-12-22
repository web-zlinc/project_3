import {combineReducers} from 'redux'
import datagrid from '../components/datagrid/datagridReducer'

import cart from '../components/shoppingCart/shoppingCartReducer';

export default combineReducers({
    datagrid,
    cart
})