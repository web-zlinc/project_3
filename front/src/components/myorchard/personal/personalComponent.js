import React from 'react'
import { Form, Icon, Input, Button,Modal,DatePicker,Select } from 'antd';
import {connect} from 'react-redux';
import {hashHistory,Link} from 'react-router'


import './personal.scss'
import * as LoginAction from '../login/loginAction';

const Option = Select.Option;
class PersonalComponent extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {
            img:1,
            data:[],
            visible: false
        }  
    }
    showModal(){
        this.setState({
          visible: true,
        });
    }
    handleOk(e){
        this.setState({
          visible: false,
        });
    }
    handleCancel(e){
        this.setState({
          visible: false,
        });
    }

    componentWillMount(){
        if(localStorage.getItem('data')){
            this.state.data=JSON.parse(localStorage.getItem('data'));
        }
        
    }

    back(){
        this.props.router.goBack()
    }
    onChange(date, dateString){
      console.log(date, dateString);
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
                            <Input id="nick" ref="nick" placeholder={this.state.data[0].phone} onClick={this.showModal.bind(this)}/>
                        </p>
                        <p>
                            <label htmlFor="gender">性别</label>
                            <Select defaultValue="保密" style={{ width:200}}>
                              <Option value="男">男</Option>
                              <Option value="女">女</Option>
                              <Option value="保密">保密</Option>
                            </Select>
                        </p>
                        <p>
                            
                            <label htmlFor="brithday">生日</label>
                            <DatePicker onChange={this.onChange.bind(this)} />
                        </p>
                        <p>
                            
                            <label htmlFor="site">地址管理</label>
                            <Input  ref="site" id="site" placeholder={this.state.data[0].address} onClick={this.showModal.bind(this)}/>
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
                <Modal
                  title="请输入呢称"
                  visible={this.state.visible}
                  onOk={this.handleOk.bind(this)}
                  onCancel={this.handleCancel.bind(this)}
                >
                  <p><Input/></p>
                  
                </Modal>
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