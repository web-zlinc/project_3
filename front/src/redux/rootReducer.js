import {combineReducers} from 'redux'

import login from '../components/login/loginReducer'
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer'

export default combineReducers({
    login,
    datagrid,
    allshow


})