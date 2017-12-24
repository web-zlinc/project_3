import React from 'react';
import './login.scss';
import { Icon, Input, Button, notification } from 'antd';

//消息提示框全局设置
notification.config({
    placement: 'topLeft',
});

class LoginComponent extends React.Component{
    loginHandler =(e) => {
        console.log('username',this.state.userName);
        console.log('password',this.state.passWord);        

    }
    getUserName = (e) =>{
        if(e.target.value == ''){
            notification.error({
                message: '错误信息',
                description: '用户名不能为空!!!',
            });
            return false;
        }
        this.setState({
            userName:e.target.value
        })
    }
    getPassWord = (e) =>{
        if(e.target.value == ''){
            notification.error({
                message: '错误信息',
                description: '密码不能为空!!!',
            });
            return false;
        }
        this.setState({
            passWord:e.target.value
        })
    }
    render(){
        return(
            <div id="login-box">
                <div className="login-main" >
                    <h3 className="login-title">登录</h3>
                    <div id="login-from" >
                        <div className="form-group">
                            <label className="from-label" >用户名：</label>
                            <Input onBlur={this.getUserName} prefix={<Icon type="user" style={{ fontSize: 14 }} />} type="text" name="username" placeholder="请输入用户名"  />
                        </div>
                        <div className="form-group">
                            <label className="from-label" >密码：</label>
                            <Input onBlur={this.getPassWord} prefix={<Icon type="lock" style={{ fontSize: 14 }} />} type="password" name="password" placeholder="请输入密码"  />
                        </div>
                        <div className="form-btn">
                            <Button type="primary" className="btnSubmit" onClick={this.loginHandler} >登录</Button>
                        </div>
                    </div>
                </div>
                <div className="copyright">2018 © Ed 新年新气象 元旦快乐</div>
            </div>
        )
    }
}

export default LoginComponent;

