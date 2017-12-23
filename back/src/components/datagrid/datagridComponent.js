import React from 'react';
import {connect} from 'react-redux';
import * as dataGridAction from './datagridAction';

import { Modal, Button, Input, Select, Row, Col } from 'antd';
import './datagrid.scss';

class DataGridComponent extends React.Component{
    componentWillMount(){
        this.setState({
            url:'furitQuery.php',
            filerSet:['imgurl','details'],
            status:1,
            states:'query',
        })
    }
    componentDidMount(){
        this.props.getData(this.state.url, {status:this.state.states});
    }
    getKeys(item){
        return item ? Object.keys(item) : []
    }
    //生成分页
    pageNumbers(){
        let result = [];
        for(let i = 1; i <= Math.ceil(this.props.total/5); i++) {
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
            this.props.onPage(this.state.url, page, this.state.optType, this.state.optContent, this.state.states);
        }
    }
    //生成查询的选项框
    createSelect(){
        let optSelect = [];
        var Option = Select.Option;
        this.getKeys(this.props.dataset[0]).map(function(key, index){
            if(this.state.filerSet.indexOf(key) < 0){
                optSelect.push(<Option value={key} key={index} id={index} >{key}</Option>)
            }
        }.bind(this))
        return optSelect;
    }
    //获取选项框的内容的函数
    getSelectValue(value){
        this.setState({optType:value})//获取选项框的value的值
    }
    //获取输入框的内容的函数
    getInputValue(e){
        this.setState({optContent:e.target.value})//获取输入框的value的值
    }
    //发起查询的条件
    sendCondition(){
        this.props.onPage(this.state.url, undefined, this.state.optType, this.state.optContent, this.state.states)
    }
    handle(e){
        if(e.target.className == 'ant-btn show ant-btn-primary'){
            this.setState({visible:true});
            this.props.getData(this.state.url, {id:e.target.parentNode.parentNode.id, handle:e.target.className, status:this.state.states});
        } else if(e.target.className == 'ant-btn del ant-btn-danger'){
            this.props.delData(this.state.url, e.target.parentNode.parentNode.id, 'delete');
        }
    }
    //编辑框的内容修改时触发
    setValue(e){
        var newEdtData = JSON.parse(JSON.stringify(this.state.edtData));
        newEdtData[0][e.target.id] = e.target.value;
        this.setState({
            edtData:newEdtData
        })
    }
    //替换选项框
    changeCont(e){
        if(e.target.innerText == '编 辑' ){
            this.setState({
                edtData:this.props.edtData,
                status:2,
                states:'update',
            })
        } else if(e.target.innerText == '保 存'){
            this.props.saveData(this.state.url, this.state.edtData, this.state.states)
            this.handleOk();
            this.setState({
                states:'query',
                status:1,
            })
        }
    }
    //弹出弹窗
    bounceModal(e){
        this.setState({
            addvisible: true,
            status:3,
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
            status:1,
            states:'query',            
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
            status:1,       
            states:'query',            
        });
    }
    addOk = (e) => {
        this.setState({
            addvisible: false,
            status:1,        
        });
        this.props.addData(this.state.url, this.state.tempOpt,'insert');
    }
    addCancel = (e) => {
        this.setState({
            addvisible: false,
            status:1,                  
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
                                        return <th key={index}>{key}</th>
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
                                    })}<td><Button type="primary" className='show'>查看</Button><Button type='danger' className="del">删除</Button></td></tr>
                            }.bind(this))
                        }
                    </tbody>
                </table>
                <ul className="pagination clearfix" >
                    {this.pageNumbers()}
                </ul>
                <Modal title="商品信息详情" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} 
                    okText="确定" cancelText="取消" className="ModalDiv" footer={null}
                >
                    {
                        this.getKeys(this.props.edtData[0]).map((key, index) => {
                            if(this.state.status == '1'){
                                return <p className="ModalP" key={'p' + key } ><label className="LabelP" key={'label' + key} >{key}</label><span id={key} key={key} >{this.props.edtData[0][key]}</span></p>
                            } else if(this.state.status == '2'){
                                return <p className="ModalP" key={'p' + key } ><label className="LabelP" key={'label' + key} >{key}</label><span><Input disabled={ key=="id" ? 'true' :""} id={key} key={key} value={this.state.edtData[0][key]} onChange={this.setValue.bind(this)} /></span></p>
                            }
                        })
                    }
                        <p className="ModalP"><span><Button type="primary" className='edt' onClick={this.changeCont.bind(this)} >{this.state.status == 1? '编辑': '保存' }</Button></span></p>   
                </Modal>
                <Modal title="添加商品信息" visible={this.state.addvisible} onOk={this.addOk} onCancel={this.addCancel} 
                    okText="确定" cancelText="取消" className="ModalDiv"
                >
                    {
                        this.getKeys(this.props.dataset[0]).map((key, index) => {
                            if(this.state.status == '3'){
                                return <p className="ModalP" key={'p' + key } ><label className="LabelP" key={'label' + key} >{key}</label><span><Input disabled={key == 'id' ? 'true' : '' } id={key} key={key} onChange={this.getValue.bind(this)} /></span></p>
                            }
                        })
                    }
                </Modal>
            </div>
        )
    }
    componentDidUpdate(){
        if(this.props.updateResponse == 'Ok'){
            this.props.getData(this.state.url, {status:this.state.states});
        }
    }
}

const mapToState = function(state){
    return {
        dataset: state.dataGrid.respones,
        total: state.dataGrid.total,
        currentPage:state.dataGrid.currentPage || 1,
        edtData:state.dataGrid.responeSingle || [],
        updateResponse:state.dataGrid.updateResponse || '',
    }
}

export default connect(mapToState, dataGridAction)(DataGridComponent)