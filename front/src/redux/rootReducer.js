import {combineReducers} from 'redux'
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer.js'
export default combineReducers({
    datagrid,
    allshow
})