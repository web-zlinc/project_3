import {combineReducers} from 'redux'
import login from '../components/login/loginReducer'
import cart from '../components/shoppingCart/shoppingCartReducer';
import allshow from '../components/csm/allShow/allShowReducer.js'


export default combineReducers({
    cart,
    allshow,
    login
})