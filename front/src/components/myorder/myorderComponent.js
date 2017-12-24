import React from 'react'
import {hashHistory,Link} from 'react-router'
import { Form, Icon, Input, Button } from 'antd'
import './myorder.scss'

import Odmain from './odmainComponent'

export default class MyorderComponent extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
            arr1:['全部','待付款','待发货','待收货','待评价'],
            arr2:[]
        }  
  
    }
    

    
    back(){
        this.props.router.goBack()
    }
    render(){
        return(
            <div id="o_container">
                <div className="oc_top">
                    <Icon type="left" className="fl" onClick={this.back.bind(this)} />
                    <span>我的订单</span>
                </div>
                <Odmain />
            </div>
        )
    }
}