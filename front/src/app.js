import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'


import RootComponent from './components/rootComponent';
import NavComponent from './components/navComponent';
import MovieComponent from './components/movieComponent';
import TvComponent from './components/tvComponent';
import ShowComponent from './components/showComponent';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}></Route>
        <Route path="/nav" component={NavComponent}>
            <Route path="movie" component={MovieComponent}></Route>
            <Route path="tv" component={TvComponent}></Route>
            <Route path="show" component={ShowComponent}></Route>
        </Route>
    </Router>,document.getElementById('app'))