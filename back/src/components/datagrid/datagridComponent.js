import React from 'react';
import {connect} from 'react-redux';
import * as dataGridAction from './datagridAction';

import Spinner from '../spinner/spinnerComponent';

import { Modal, Button, Input, Select, notification } from 'antd';
import './datagrid.scss';

//消息提示框全局设置
notification.config({
    placement: 'topLeft',
});


class DataGridComponent extends React.Component{
    componentWillMount(){
        this.setState({
            url:'FuritExpress.php',
            filerSet:['imgurl','details','name'],
            states:1,
            status:'query',
            languageExchange:{
                id:'#',
                gid:'商品编号',
                name:'商品详情',
                details:'商品描述',
                price:'商品价格',
                images:'图片路径',
                short_name:'商品名称',
                inventory:'商品库存',
                standard:'商品规格',
                hot:'热销',
                sale:'销售量',
                type:'商品类型',
            }
        })
    }
    componentDidMount(){
        var params = {
            status:this.state.status,
            page:this.props.currentPage
        }
        this.props.getData(
            this.state.url,
            params
        );
    }
    getKeys(item){
        return item ? Object.keys(item) : []
    }
    //生成分页
    pageNumbers(){
        let result = [];
        for(let i = 1; i <= Math.ceil(this.props.total/7); i++) {
          result.push(<li
            className={i == this.props.currentPage ? 'activePage' : ''} key={i}
            onClick={e => this.handlePage(e)}
          >{i}</li>);
        }
        return result;
    }
    //分页执行的函数
    handlePage(e) {
        let page = Number(e.target.innerHTML);
        if(page !== this.props.currentPage) {
            if(!this.state.optType && !this.state.optContent){
                var params = {
                    page:page,
                    status:this.state.status,
                }
                this.props.getData(
                    this.state.url,
                    params
                );
            }else if(this.state.optType && this.state.optContent){
                var params = {
                    page:page,
                    status:this.state.status,
                }
                params[this.state.optType] = this.state.optContent;
                this.props.getData(
                    this.state.url,
                    params
                )
            }
        }
    }
    //生成查询的选项框
    createSelect(){
        let optSelect = [];
        var Option = Select.Option;
        this.getKeys(this.props.dataset[0]).map(function(key, index){
            if(this.state.filerSet.indexOf(key) < 0){
                optSelect.push(<Option value={key} key={index} id={index} >{this.state.languageExchange[key]}</Option>)
            }
        }.bind(this))
        return optSelect;
    }
    //获取选项框的内容的函数
    getSelectValue(value){
        this.setState({optType:value})
    }
    //获取输入框的内容的函数
    getInputValue(e){
        this.setState({optContent:e.target.value})
    }
    //发起查询的条件
    sendCondition(){
        if(!this.state.optContent || !this.state.optType){
            notification.error({
                message: '错误信息',
                description: '选项框内容和输入框内容不能为空!',
            });
            return false;
        }
        var params = {
            status:this.state.status,
            page:1,
        };
        params[this.state.optType] = this.state.optContent;
        this.props.getData(
            this.state.url,
            params
        )
    }
    handle(e){
        if(e.target.className == 'ant-btn show ant-btn-primary'){
            this.setState({visible:true});
            var params = {
                id:e.target.parentNode.parentNode.id,
                status:this.state.status,
                handle:'queryOne'
            }
            this.props.getData(
                this.state.url,
                params
            );
        } else if(e.target.className == 'ant-btn del ant-btn-danger'){
            var params = {
                status:'delete',
                id:e.target.parentNode.parentNode.id,
                handle:'deleteOne',
                page:this.props.currentPage,
            }
            this.props.getData(
                this.state.url,
                params
            );
        }
    }
    //编辑框的内容修改时触发
    setValue(e){
        var newEdtData = JSON.parse(JSON.stringify(this.state.dataAlter));
        newEdtData[0][e.target.id] = e.target.value;
        this.setState({
            dataAlter:newEdtData
        })
    }
    //替换选项框
    changeCont(e){
        if(e.target.innerText == '编 辑' ){
            this.setState({
                dataAlter:this.props.dataAlter,
                states:2,
            })
        } else if(e.target.innerText == '保 存'){
            var params = JSON.parse(JSON.stringify(this.state.dataAlter[0]));
            params.status = 'update';
            params.handle = 'updateOne';
            this.props.getData(
                this.state.url,
                params
            )
            this.handleOk();
            this.setState({
                states:1,
            })
        }
    }
    //弹出弹窗
    bounceModal(e){
        this.setState({
            addvisible: true,
            states:3,
            tempOpt:{}
        })
    }
    //添加信息弹出窗获取值的事件
    getValue(e){
        this.state.tempOpt[e.target.id] = e.target.value;
    }
    handleOk = (e) => {
        this.setState({
            visible: false,
            states:1,
            status:'query',            
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
            states:1,       
            status:'query',            
        });
    }
    addOk = (e) => {
        this.setState({
            addvisible: false,
            states:1,        
        });
        var params = JSON.parse(JSON.stringify(this.state.tempOpt));
        params.status = 'insert';
        params.handle = 'insertOne';
        params.page = this.props.currentPage;
        console.log(params);
        this.props.getData(
            this.state.url,
            params,
        );
    }
    addCancel = (e) => {
        this.setState({
            addvisible: false,
            states:1,                  
        });
    }
    render(){
        if(!this.props.dataset){
            return null;
        }
        return (
            <div id="Tab" >
                <Select onSelect={this.getSelectValue.bind(this)}>
                    {this.createSelect()}
                </Select>
                <Input type="text" onBlur={this.getInputValue.bind(this)} className="SearchIpt" />
                <Button type="primary" shape="circle" icon="search" onClick={this.sendCondition.bind(this)} ></Button>
                <Button type="primary" shape="circle" icon="plus-circle-o" onClick={this.bounceModal.bind(this)}  ></Button>
                <table className="tabBox" >
                    <thead className="tabHead" >
                        <tr>
                            {
                                this.getKeys(this.props.dataset[0]).map((key, index) => {
                                    if(this.state.filerSet.indexOf(key) < 0 ){
                                        return <th key={index}>{this.state.languageExchange[key]}</th>
                                    }
                                })
                            }
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody onClick={this.handle.bind(this)} className="tabBody">
                        {
                            this.props.dataset.map(function(obj, index){
                                return <tr key={index} id={obj.id} >{this.getKeys(obj).map((key, idx) => {
                                        if(this.state.filerSet.indexOf(key) < 0 ){
                                            return <td key={idx}>{obj[key]}</td>
                                        }
                                    })}<td><Button type="primary" className='show'>查看</Button><Button type="danger" className="del">删除</Button></td></tr>
                            }.bind(this))
                        }
                    </tbody>
                </table>
                <Spinner show={this.props.loading}></Spinner>
                <ul className="pagination clearfix" >
                    {this.pageNumbers()}
                </ul>
                <Modal title="商品信息详情" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} 
                    okText="确定" cancelText="取消" className="ModalDiv" footer={null}
                >
                    {
                        this.getKeys(this.props.dataAlter[0]).map((key, index) => {
                            if(this.state.states == '1'){
                                return <p className="ModalP" key={'p' + key } ><label className="LabelP" key={'label' + key} >{this.state.languageExchange[key]}</label><span id={key} key={key} >{this.props.dataAlter[0][key]}</span></p>
                            } else if(this.state.states == '2'){
                                return <p className="ModalP" key={'p' + key } ><label className="LabelP" key={'label' + key} >{this.state.languageExchange[key]}</label><span><Input disabled={ key=="id" ? 'true' :""} id={key} key={key} value={this.state.dataAlter[0][key]} onChange={this.setValue.bind(this)} /></span></p>
                            }
                        })
                    }
                        <p className="ModalP"><span><Button type="primary" className='edt' onClick={this.changeCont.bind(this)} >{this.state.states == 1? '编辑': '保存' }</Button></span></p>   
                </Modal>
                <Modal title="添加商品信息" visible={this.state.addvisible} onOk={this.addOk} onCancel={this.addCancel} 
                    okText="确定" cancelText="取消" className="ModalDiv"
                >
                    {
                        this.getKeys(this.props.dataset[0]).map((key, index) => {
                            if(this.state.states == '3'){
                                return <p className="ModalP" key={'p' + key } ><label className="LabelP" key={'label' + key} >{this.state.languageExchange[key]}</label><span><Input disabled={key == 'id' ? 'true' : '' } id={key} key={key} onChange={this.getValue.bind(this)} /></span></p>
                            }
                        })
                    }
                </Modal>
            </div>
        )
    }
    componentDidUpdate(){
        if(this.props.messageRequested == 'Ok'){
            var params = {
                status:this.state.status,
                page:this.props.currentPage
            }
            this.props.getData(
                this.state.url,
                params
            );
        }
    }
}

const mapToState = function(state){
    console.log(state)
    return {
        dataset: state.dataGrid.respones || [],
        total: state.dataGrid.total || 0,
        currentPage:state.dataGrid.currentPage || 1,
        dataAlter:state.dataGrid.responesone || [],
        messageRequested:state.dataGrid.responesone || '',
        loading:state.dataGrid.loading || false,
    }
}

export default connect(mapToState, dataGridAction)(DataGridComponent)