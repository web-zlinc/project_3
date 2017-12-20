import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {ajaxMiddleware} from './ajaxMiddleware'
import reducer from './rootReducer'

const middleware = applyMiddleware(ajaxMiddleware)
const store = createStore(reducer, middleware)

export default store