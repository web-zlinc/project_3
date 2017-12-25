import React from 'react';
import DataGridComponent from '../datagrid/datagridComponent';

const data = {
    url:'Administrator.php',
    languageExchange:{
        id:'#',
        username:'用户名',
        password:'密码',
        type:'权限'
    }
}

export default class AdministratorComponent extends React.Component{
    render(){
        return(
            <DataGridComponent url={data.url} languageExchange={data.languageExchange} ></DataGridComponent>
        )
    }
}