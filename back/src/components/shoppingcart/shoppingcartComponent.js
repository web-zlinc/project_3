import React from 'react';
import DataGridComponent from '../datagrid/datagridComponent';

const data = {
    url:'ShoppingCart.php',
    languageExchange:{
        id:'#',
        uid:'用户编号',
        gid:'商品编号',
        username:'用户名',
        qty:'商品数量'
    }
}

export default class ShoppingCartComponent extends React.Component{
    render(){
        return(
            <DataGridComponent url={data.url} languageExchange={data.languageExchange} ></DataGridComponent>
        )
    }
}