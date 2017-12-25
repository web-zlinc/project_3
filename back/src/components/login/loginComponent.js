import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import * as loginAction from './loginAction';
import Spinner from '../spinner/spinnerComponent';
import './login.scss';
import { Icon, Input, Button, notification } from 'antd';

//消息提示框全局设置
notification.config({
    placement: 'topLeft',
});

class LoginComponent extends React.Component{
    componentDidMount(){
        this.setState({
            url:'AdminLogin.php',
        })
    }
    componentDidUpdate(){
        if(this.props.status == '1' && this.props.data ){
            // var path = {
            //     pathname:'/',
            //     state:this.props.data
            // }
            var str = JSON.stringify(this.props.data);
            window.localStorage.setItem('userInfo', str);
            hashHistory.push('/');
        }
    }
    componentWillUnmount(){
        this.setState({
            userName:'',
            passWord:''
        })
        this.props.login(
            this.state.url,
        )
    }
    loginHandler =(e) => {
        var params = {
            username:this.state.userName,
            password:this.state.passWord
        }
        this.props.login(
           this.state.url,
           params
        )
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
            userName:e.target.value,
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
            passWord:e.target.value,
        })
    }
    render(){
        return(
            <div id="login-box">
                <Spinner show={this.props.loading} ></Spinner>
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

const mapToState = function(state){
    return{
        data:state.login.respones,
        loading:state.login.loading || false,
        status:state.login.status,
    }
}

export default connect(mapToState, loginAction)(LoginComponent);

