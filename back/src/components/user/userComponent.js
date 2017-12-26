import React from 'react';
import DataGridComponent from '../datagrid/datagridComponent';

const data = {
    url:'User.php',
    languageExchange:{
        id:'#',
        uid:'用户编号',
        phone:'用户手机号',
        password:'用户密码',
        gender:'性别',
        brithday:'出生日期',
        portrait:'用户头像',
        address:'用户地址'
    }
}

export default class UserComponent extends React.Component{
    render(){
        return(
            <DataGridComponent url={data.url} languageExchange={data.languageExchange} ></DataGridComponent>
        )
    }
}