import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './login.scss'

export default class LoginComponent extends React.Component{
    render(){
        return (
            <div id="l_container">
                <div className="l_top">
                    <p>
                        <Icon type="left" className="fl" />
                        <span>手机快捷登录</span>
                    </p>
                </div>
                <div className="l_main">
                    <p>
                        <Icon type="mobile" />
                        <Input placeholder="手机号" className="phone" />
                       
                    </p>
                    <p>
                        <Icon type="key" />
                        <Input placeholder="短信验证码" />
                    </p>
                    <p>
                        <Icon type="lock" />
                        <Input type="password" placeholder="密码" />
                    </p>
                    <p className="cont">首次用手机号登录将自动为您注册，并有豪礼相送。</p>
                    <p><Button type="primary">登录</Button></p>
                    <p className="footer"><span className="fl">账号密码登录</span><span className="fr">未收到验证码?</span></p>
                </div>
            </div>
        )
    }
}