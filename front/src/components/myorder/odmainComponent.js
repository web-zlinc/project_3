import React from 'react'
import {connect} from 'react-redux';
import {hashHistory,Link} from 'react-router'
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
        if(window.localStorage.data){
            this.props.getData('order.php',{status:key});
        }
        if(key=='全部'){
            if(window.localStorage.data){
                var arr=JSON.parse(window.localStorage.data);
                this.props.getData('order.php',{uid:arr[0].uid})
            }
        }

    }

    //根据不同状态生成结构内容
    html(){
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
        }else{
            return <li><Link to="/login">请先登录</Link></li>
        }

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
            <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                <TabPane tab="全部" key="全部">
                    <ul>
                        {  
                            this.html()
                        }
                        
                    </ul>
                </TabPane>
                <TabPane tab="待付款" key="待付款">
                    <ul>
                        {  
                            this.html()
                        }
                    </ul>
                </TabPane>
                <TabPane tab="待发货" key="待发货">
                    <ul>
                        {  
                            this.html()
                        }
                    </ul>
                    
                </TabPane>
                <TabPane tab="待收货" key="待收货">
                    <ul>
                        {  
                            this.html()
                        }
                    </ul>
                    
                </TabPane>
                <TabPane tab="待评价" key="待评价">
                    <ul>
                        <li>待评价</li>
                    </ul>
                </TabPane>
            </Tabs>
        )
    }
}


const mapToState = function(state){
    return {
        type:state.login.status,
        dataset: state.login.response
    }
}

export default connect(mapToState, myorderAction)(OdmainComponent);
