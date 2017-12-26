import React from 'react';
import DataGridComponent from '../datagrid/datagridComponent';

const data = {
    url:'order.php',
    languageExchange:{
        id:'#',
        uid:'用户编号',
        orderNo:'订单编号',
        stu:'订单状态',
        addtime:'添加时间',
        gid:'商品编号',
        qty:'商品数量'
    }
}

export default class OrderComponent extends React.Component{
    render(){
        return(
            <DataGridComponent url={data.url} languageExchange={data.languageExchange} ></DataGridComponent>
        )
    }
}