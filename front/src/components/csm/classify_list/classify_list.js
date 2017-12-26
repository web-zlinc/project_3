
import React from 'react'
import { Link } from 'react-router';
import { Input, Button, Icon, Layout, Row, Col } from 'antd';
import Datalist from '../../commonComponent/datalist.js'
import {connect} from 'react-redux';
import * as listActions from '../../datagrid/datagridAction.js'
var arr=["全部","奇异果","苹果","橙柑橘柚","牛油果","热带水果","牛排"]
class Classify_list extends React.Component{
    componentDidMount(){
        if(window.localStorage.data){
            var arr=JSON.parse(window.localStorage.data);
            if(arr.length>0){
               var phone=arr[0].phone;
            }
           
        }
        else{
            var phone="";
        }
        this.props.getData("classify_list.php",{name:this.props.params.name,phone:phone});
    }   
    change(event){
        var nav=document.getElementsByClassName('data_nav')[0];
        var spans=nav.getElementsByTagName('span');
        for(var i=0;i<spans.length;i++){
            spans[i].style.color="#000";
            spans[i].style.borderBottom="none";
      }   
        var currentSpan=event.target;
        currentSpan.style.color="#75A739";
        currentSpan.style.borderBottom="4px solid #75A739";

         var type=currentSpan.innerText;
         if(type=="全部"){
        var type=currentSpan.innerText;
            this.props.getData("classify_list.php");      
        }
        else{
            this.props.getData("classify_list.php",{name:type});
         }            

    }
    // 排序
    order(event){
        var nav=document.getElementsByClassName('data_order')[0];
        var spans=nav.getElementsByTagName('span');
         for(var i=0;i<spans.length;i++){
            spans[i].style.color="#000";
      }   
       var currentSpan=event.target;
       var span=currentSpan.innerText;
       var arr=this.props.dataset.data1;
       currentSpan.style.color="#75A739";
       if(span=="综合"){
          arr.sort(this.compare("id"));console.log(arr)
       }
       if(span=="销量"){
        arr.sort(this.compare("sale"));console.log(arr)

       }    
       if(currentSpan.className=="price"){
        currentSpan.nextSibling.firstChild.style.color="#75A739";
        arr.sort(this.compare("price"));console.log(arr)
       }
             
    }
    // 排序
    compare(prop){
      return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }            
      } 
    }
    back(){
        this.props.router.goBack(-1);
    }
    render(){
      if(!this.props.dataset){
        return null
      }
        return (
            <div id="datalist">
                <div className="data_top">
                    <div className="data_header">
                            <p><Icon type="left" onClick ={this.back.bind(this)}/></p>
                            <p>{this.props.params.type}</p>
                            <p><Link to="/search"><Icon type="search" /></Link></p>
                            
                    </div>
                    <div className="data_nav">
                        <ul >
                        {
                            arr.map(function(item,index){
                                return <li key={index}><span onClick={this.change.bind(this)}>{item}</span></li>
                            }.bind(this))
                        }                 
                        </ul>
                    </div>
                    <ul className="data_order">
                        <li><span onClick={this.order.bind(this)}>综合</span></li>
                        <li><span onClick={this.order.bind(this)}>销量</span></li>
                        <li><span onClick={this.order.bind(this)} className="price">价格</span><p className="order"><Icon type="caret-up" /><Icon type="caret-down" /></p></li>
                    </ul>
                </div>
                <div className="data_content">
                    <Datalist datas={this.props.dataset.data1}></Datalist>
                </div>
                <div className="cart">
                    <Link to="/cart">
                        <Icon type="shopping-cart" className="cart"/>
                    </Link>
                    
                </div>
               
            </div>
            )
      }
    
}
const mapToState=function(state){
    return {
        dataset:state.allshow.response
    }
}
import './classify_list.scss'
export default connect(mapToState,listActions)(Classify_list)