import React from 'react'
import { Form, Icon, Input, Button,Modal} from 'antd';
import {connect} from 'react-redux';
import './personal.scss'
import * as LoginAction from '../login/loginAction';



class PersonalComponent extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
            Storage:JSON.parse(window.localStorage.data)
        }  
  
    }

    back(){
        this.props.router.goBack()
    }
    
    save(){
        console.log(this.state.Storage);
        var nick=this.refs.nick.input.value;
        var gender=this.refs.gender.input.value;
        var birthday=this.refs.birthday.input.value;
        var site=this.refs.site.input.value;

        if(nick&&gender&&birthday&&site){
            var params={id:this.state.Storage[0].id,pphone:nick,pgender:gender,pbirthday:birthday,psite:site};
            this.props.getData('user.php',params);

        }
        console.log(this);
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
                        <img src={this.state.Storage[0].portrait}/>
                    </div>
                    <div className="pmc">
                        <p>
                            <label htmlFor="nick">呢称</label>
                            <Input placeholder={this.state.Storage[0].phone} id="nick" ref="nick"/>
                        </p>
                        <p>
                            <label htmlFor="gender">性别</label>
                            <Input id="gender" list="cars" ref="gender"/>
                            <datalist id="cars">
                              <option value="男" />
                              <option value="女"/>
                              <option value="保密"/>
                            </datalist>
                        </p>
                        <p>
                            
                            <label htmlFor="birthday">生日</label>
                            <Input type="date" placeholder="保密" ref="birthday" id="birthday"/>
                        </p>
                        <p>
                            
                            <label htmlFor="site">地址管理</label>
                            <Input placeholder="输入地址" ref="site" id="site"/>
                            <Icon type="right" />
                        </p>
                        <p>
                            <span>我的收藏</span>
                            <Icon type="right" />
                        </p>
                        <p>
                            <Button type="primary" onClick={this.save.bind(this)}>保存</Button>
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