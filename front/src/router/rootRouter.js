import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
<<<<<<< HEAD
// import AppComponent from '../components/app/appComponent'
// import ProductsComponent from '../components/products/productsComponent'

export default (
    // <Route path="/" component={AppComponent}>
        // <Route path="products" component={ProductsComponent}></Route>
    // </Route>
=======
import AppComponent from '../components/app/appComponent'
import ProductsComponent from '../components/products/productsComponent'

export default (
    <Route path="/" component={AppComponent}>
        <Route path="products" component={ProductsComponent}></Route>
    </Route>
>>>>>>> cbe7c7571b765af7d97d9d5e54a16dcea7919d26
)