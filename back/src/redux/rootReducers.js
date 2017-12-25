import {combineReducers} from 'redux';

import dataGrid from '../components/datagrid/datagridReducer';
import login from '../components/login/loginReducer';
import main from '../components/main/mainReducer';

export default combineReducers({
    dataGrid,
    login,
    main,
})