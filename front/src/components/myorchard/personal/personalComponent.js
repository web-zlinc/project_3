import React from 'react'
import { Form, Icon, Input, Button,Modal,DatePicker,Select} from 'antd';
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
            visible1: false,
            visible2: false,
            visible3: false
        }  
    }
    showModal(){
        this.setState({
          visible1: true,
        });
    }
    showModal2(){
        this.setState({
          visible2: true,
        });
    }
    showModal3(){
        this.setState({
          visible3: true,
        });
    }
    handleOk(e){
        this.setState({
          visible1: false,
          visible2: false,
          visible3: false
        });
    }
    handleCancel(e){
        this.setState({
          visible1: false,
          visible2: false,
          visible3: false
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
    gofavorite(){
        hashHistory.push('/myorchard/favorite');
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
                            <span>电话</span>
                            <span className="sec" onClick={this.showModal.bind(this)}>{this.state.data[0].phone}</span>
                        </p>
                        <p>
                            <span>性别</span>
                            <span className="sec"  onClick={this.showModal2.bind(this)} >{this.state.data[0].gender}</span>
                            
                        </p>
                        <p>
                            <span>生日</span>
                            <DatePicker onChange={this.onChange.bind(this)} />
                        </p>
                        <p>
                            
                            <span >地址管理</span>
                            <span className="sec" onClick={this.showModal3.bind(this)}>{this.state.data[0].address}</span>
                        </p>
                        <p>
                            <span onClick={this.gofavorite.bind(this)}>我的收藏</span>
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
                <Modal title="请输入呢称"  visible={this.state.visible1} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
                  <p><Input ref="nick" placeholder={this.state.data[0].phone} /></p>
                </Modal>
                <Modal title="请选择"  visible={this.state.visible2} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
                  <p>男</p>
                  <p>女</p>
                  <p>保密</p>
                </Modal>
                <Modal title="请输入地址"  visible={this.state.visible3} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
                  <p><Input ref="nick" placeholder={this.state.data[0].address} /></p>
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