import React from 'react'
import { Form, Icon, Input, Button,Modal} from 'antd';
import {connect} from 'react-redux';
import {hashHistory,Link} from 'react-router'


import './personal.scss'
import * as LoginAction from '../login/loginAction';

class PersonalComponent extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {
            img:1,
            data:[]
        }  
    }

    componentWillMount(){
        if(window.localStorage.data){
            this.state.data=JSON.parse(window.localStorage.data);
        }
        
    }
    componentWillUpdate(nextProps, nextState){
        var nick=this.refs.nick.input.value;
        var gender=this.refs.gender.input.value;
        var brithday=this.refs.brithday.input.value;
        var site=this.refs.site.input.value;

    }

    back(){
        this.props.router.goBack()
    }

    save(){
        var nick=this.refs.nick.input.value;
        var gender=this.refs.gender.input.value;
        var brithday=this.refs.brithday.input.value;
        var site=this.refs.site.input.value;
        var uid=this.state.data[0].uid;


        if(nick==='' || gender==='' || brithday==='' || site===''){
            alert('请完善信息！');
        }else if(nick&&gender&&brithday&&site){
            var params={id:uid,phone:nick,gender:gender,brithday:brithday,site:site};
            this.props.getData('save.php',params);
        }


    }   
    
    exit(){
        alert('确认要要出吗?');
        localStorage.removeItem('data');
        hashHistory.push('/myorchard');
    }

    render(){
        return (
            <div id="p_container">
                <div className="p_head">
                    <Icon type="left" className="fl" onClick={this.back.bind(this)} />
                    <span>个人信息</span>
                </div>
                <div className="p_main">
                    <div className="pmt">
                        <span>头像</span>
                        <img src={this.state.data[0].portrait}/>
                    </div>
                    <div className="pmc">
                        <p>
                            <label htmlFor="nick">呢称</label>
                            <Input id="nick" ref="nick" placeholder={this.state.data[0].phone}/>
                        </p>
                        <p>
                            <label htmlFor="gender">性别</label>
                            <Input id="gender" list="cars" ref="gender" placeholder={this.state.data[0].gender}/>
                            <datalist id="cars">
                              <option value="男" />
                              <option value="女"/>
                              <option value="保密"/>
                            </datalist>
                        </p>
                        <p>
                            
                            <label htmlFor="brithday">生日</label>
                            <Input type="date" placeholder="保密" ref="brithday" id="brithday" />
                        </p>
                        <p>
                            
                            <label htmlFor="site">地址管理</label>
                            <Input  ref="site" id="site" placeholder={this.state.data[0].address}/>
                        </p>
                        <p>
                            <span>我的收藏</span>
                            <Icon type="right" />
                        </p>
                        <p>
                            <Button type="primary" onClick={this.save.bind(this)}>保存</Button>
                        </p>
                        <p>
                            <Button type="primary" onClick={this.exit.bind(this)}>退出登录</Button>
                        </p>
                    </div>
                </div>
            </div>
            )
        }
    
}

const mapToState = function(state){
    return {
        dataset: state.login.response
    }
}

export default connect(mapToState, LoginAction)(PersonalComponent);