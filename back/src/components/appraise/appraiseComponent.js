import React from 'react';
import DataGridComponent from '../datagrid/datagridComponent';

const data = {
    url:'Appraise.php',
    languageExchange:{
        id:'#',
        gid:'商品编号',
        content:'评论内容',
        username:'用户名'
    }
}

export default class AppraiseComponent extends React.Component{
    render(){
        return(
            <DataGridComponent url={data.url} languageExchange={data.languageExchange} ></DataGridComponent>
        )
    }
}