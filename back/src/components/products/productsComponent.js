import React from 'react';
import DataGridComponent from '../datagrid/datagridComponent';

const data = {
    url:'FuritExpress.php',
    filerSet:['images','details','name'],
    states:1,
    status:'query',
    languageExchange:{
        id:'#',
        gid:'商品编号',
        name:'商品详情',
        details:'商品描述',
        price:'商品价格',
        images:'图片路径',
        short_name:'商品名称',
        inventory:'商品库存',
        standard:'商品规格',
        hot:'热销',
        sale:'销售量',
        type:'商品类型',
    }
}

export default class ProductsComponent extends React.Component{
    render(){
        return(
            <DataGridComponent 
                url={data.url}
                filerSet={data.filerSet}
                states={data.states}
                status={data.status}
                languageExchange={data.languageExchange}
            ></DataGridComponent>
        )
    }
}
