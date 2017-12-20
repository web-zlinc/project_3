import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'
import Rem from './getRem/getRem.js'
import './basescss/base.scss'
import ClassifyComponent from './components/csm_classify/classifyComponent.js'

Rem.rem();
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ClassifyComponent}/>
    </Router>,document.getElementById('app'))