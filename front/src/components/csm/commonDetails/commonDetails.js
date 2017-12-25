import React from 'react'
import { Link} from 'react-router';
import {connect} from 'react-redux';
import { Input, Button, Icon, Layout, Row, Col } from 'antd';
import * as commonDetailsActions from '../../datagrid/datagridAction.js'
import Content from './content/contentComponent.js'
import Evaluate from './evaluate/evaluateComponent.js'
class Details extends React.Component{
    componentDidMount(){
        this.props.getData("details.php",{gid:this.props.params.gid});
    }
    back(){
        this.props.router.goBack();
    }
    render(){
    if(!this.props.data){
        return null
    }
    return (
    <div id="details">
        <div className="data_header">
            <p><Icon type="left" onClick ={this.back.bind(this)}/></p>
            <p><span>详情</span></p>
            <p><Icon type="ellipsis" /></p>                   
        </div> 
        <div className="center">
            <Content dataset={this.props.data.data1}></Content>
            <Evaluate dataset={this.props.data.data2}></Evaluate>
        </div>
        
        <div className="cart">
                <div>
                    <Link to="/cart">
                        <Icon type="shopping-cart" className="cart"/>
                    </Link>
                    <span className="totalQty">11</span>
                </div>            
                    <div className="addCart"> 
                    <span>明日达</span><span>加入购物车</span>
                </div>
        </div>
    </div>
    )
    }
}
const mapToState=function(state){
    return {
        data:state.allshow.response
    }
}
import './commonDetails.scss'
export default connect(mapToState,commonDetailsActions)(Details)