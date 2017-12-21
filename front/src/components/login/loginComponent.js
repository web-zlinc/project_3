import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './login.scss'

export default class LoginComponent extends React.Component{
    render(){
        return (
            <div id="container">
                <div className="l_top">
                    <p>
                        <Icon type="left" className="fl" />
                        <span>手机快捷登录</span>
                    </p>
                </div>
                <div className="l_main">

                </div>
            </div>
        )
    }
}