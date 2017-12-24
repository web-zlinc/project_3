import React from 'react';
import { Form, Icon, Input, Button ,Alert} from 'antd';
import { hashHistory, Link } from 'react-router';
import {connect} from 'react-redux';
import * as LoginAction from './loginAction';
import Spinner from '../spinner/spinnerComponent'
import './login.scss'

class LoginComponent extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
            show:false  
        }  
  
    }
    
    back(){
        this.props.router.goBack()
    }

    
    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    componentWillUpdate(nextProps, nextState){
        if(nextProps.type == 0){
            nextState.show = true;
        }else if(nextProps.type == 1){
            nextState.show = false;
            if(nextProps.dataset.length>0){
               hashHistory.push('myorchard');

            }else if(nextProps.dataset.length==0){
                alert('用户名和密码错误');
            }

        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.dataset){
            var obj=JSON.stringify(this.props.dataset);
            var storage = window.localStorage;
            storage.setItem('data',obj);
        }
    }

    login(){
        var phone=this.refs.phone.input.value;
        var password=this.refs.pwd.input.value;
        if(phone&&password){
            
            this.props.getData('user.php',{lphone:phone,lpassword:password});
            return;
        }

    }

    

    register(){
        var phone=this.refs.phone.input.value;
        var password=this.refs.pwd.input.value;
        if(phone&&password){
            this.props.getData('user.php',{rphone:phone,rpassword:password});
        }
        

    }

    

    render(){
        return (
            <div id="l_container">
                <Spinner show={this.state.show}/>
                <div className="l_top">
                    <p>
                        <Icon type="left" className="fl" onClick={this.back.bind(this)}/>
                        <span>手机快捷登录</span>
                    </p>
                </div>
                <form className="l_main">
                    <p>
                        <Icon type="mobile" />
                        <Input placeholder="手机号" className="phone" ref="phone" onBlur={this.telCheck}/>
                        <Button type="primary" >获取验证码</Button>
                    </p>
                    <p>
                        <Icon type="key" />
                        <Input placeholder="短信验证码" ref="code" />
                    </p>
                    <p>
                        <Icon type="lock" />
                        <Input type="password" placeholder="密码" ref="pwd" onBlur={this.pwdCheck} />
                    </p>
                    <p className="cont">首次用手机号登录将自动为您注册，并有豪礼相送。</p>
                    <p><Button type="primary" className="login" onClick={this.login.bind(this)}>登录</Button></p>
                    <p><Button type="primary" className="register" onClick={this.register.bind(this)}>注册</Button></p>
                    <p className="footer"><span className="fl">账号密码登录</span><span className="fr">未收到验证码?</span></p>
                </form>
            </div>
        )
    }
}

const mapToState = function(state){ 
    return {
        type:state.login.status,
        dataset: state.login.response
    }
}

export default connect(mapToState, LoginAction)(LoginComponent);