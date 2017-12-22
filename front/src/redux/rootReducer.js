import {combineReducers} from 'redux'
import datagrid from '../components/datagrid/datagridReducer'
import allshow from '../components/csm/allShow/allShowReducer.js'
import searchFruit from '../components/commonComponent/searchReducer'

export default combineReducers({
    datagrid,
    allshow,
    searchFruit
})