import React from 'react'
import { Link} from 'react-router';
import {connect} from 'react-redux';
import { Input, Button, Icon, Layout, Row, Col } from 'antd';
import * as datailsActions from '../commonDetails/detailsAction.js'
import Content from './content/contentComponent.js'
import Evaluate from './evaluate/evaluateComponent.js'
import Spinner from '../../spinner/spinnerComponent.js'
class Details extends React.Component{
      constructor(props){
        super(props);
        this.state = {
            show: false,
            totalQty:0,
             data:this.props.data
        };
    }
     
    componentDidMount(){
        // this.setState({data:this.props.data})
        this.props.getData("details.php",{gid:this.props.params.gid});
    }
    addcart(event){
        var gid=this.props.params.gid;
        this.setState({show:true});console.log(this)
        if(window.localStorage.data){
           var arr=JSON.parse(window.localStorage.data);
            var phone=arr[0].phone; 
          this.setState({show:true});
             this.props.addCart("datalist.php",{gid:gid,phone:phone});
                 this.setState({show:false});
                 if(this.props.cart=="true"){
                    alert('保存成功！');
                 } 
        }
        event.preventDefault();
    }
    back(){
        this.props.router.goBack();
    }
    render(){
    if(!this.state.data){
        return null
    }
    return (
        <div id="details"><Spinner show={this.show}></Spinner>
        <div className="data_header">
            <p><Icon type="left" onClick ={this.back.bind(this)}/></p>
            <p><span>详情</span></p>
            <p><Icon type="ellipsis" /></p>                   
        </div> 
        <div className="center">
            <Content dataset={this.state.data.data1}></Content>
            <Evaluate dataset={this.state.data.data2}></Evaluate>
        </div>
        
        <div className="cart">
                <div>
                    <Link to="/cart">
                        <Icon type="shopping-cart" className="cart"/>
                    </Link>
                    <span className="totalQty">{this.state.data.data2[0].sum}</span>
                </div>            
                    <div className="addCart" onClick={this.addcart.bind(this)}> 
                    <span>明日达</span>
                    <span >加入购物车</span>
                </div>
        </div>
    </div>
    )
    }
}
const mapToState=function(state){
    return {
        data:state.allshow.response,
        cart:state.allshow.response
    }
}
import './commonDetails.scss'
export default connect(mapToState,datailsActions)(Details)