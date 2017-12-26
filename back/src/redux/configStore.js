import {createStore, applyMiddleware} from 'redux';
import RootReducer from './rootReducers';//引入总的reducers
import {ajaxMiddleWare} from './ajaxMiddleWare';//引入中间件

const middleWare = applyMiddleware(ajaxMiddleWare);
const store = createStore(RootReducer, middleWare);

export default store;
