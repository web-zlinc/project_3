import React from 'react'
import {connect} from 'react-redux';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import * as myorderAction from './myorderAction'
class OdmainComponent extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
            oid:0,
            arr:[]
        }  
  
    }
    callback(key) {
      console.log(key);
    }

    componentDidMount(){
        if(window.localStorage.data){
            var arr=JSON.parse(window.localStorage.data);
            this.props.getData('order.php',{uid:arr[0].uid})
        }


    }
    componentWillUpdate(nextProps, nextState){
        if(this.props.dataset){
           this.state.arr=this.props.dataset;
        }
    }

    render(){
        return(
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="全部" key="1">
                    <ul>
                        {  
                            (function(){
                                if(this.props.dataset){
                                    return this.props.dataset.map((item,idx)=>{
                                    return <li key={idx}>
                                            <p className="one">
                                                <span>{item.orderNo}</span>
                                                <span>{item.status}</span>
                                            </p>
                                            <div className="sdel">
                                                <img src={item.images}/>
                                                <div className="sdr">
                                                    <p>
                                                        <span className="fl">{item.name}</span>
                                                        <span className="fr">{item.inventory}</span>
                                                    </p>
                                                    <p className="unit ">78.0克/袋</p>
                                                </div>
                                            </div>
                                            <p className="two">
                                            共1件商品 合计: <span className="pri">{item.price}</span>(含运费￥20.00)
                                            </p>
                                            <p className="three">
                                                <span>删除订单</span>
                                                <span>取消订单</span>
                                            </p>
                                        </li>
                                })
                                }
                            }.bind(this))()
                            
                        }
                        
                    </ul>
                </TabPane>
                <TabPane tab="待付款" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="待发货" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="待收货" key="4">Content of Tab Pane 4</TabPane>
                <TabPane tab="待评价" key="5">Content of Tab Pane 5</TabPane>
            </Tabs>
            
            )
    }
}


const mapToState = function(state){
    console.log(state); 
    return {
        type:state.login.status,
        dataset: state.login.response
    }
}

export default connect(mapToState, myorderAction)(OdmainComponent);
