/* 
* @Author: sherah
* @Date:   2017-12-22 10:24:01
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-23 15:11:26
*/

import React from 'react'
import { Link} from 'react-router';
import { Input, Button, Icon, Layout, Row, Col } from 'antd';
import Datalist from '../../commonComponent/datalist.js'
import {connect} from 'react-redux';
import * as listActions from '../../datagrid/datagridAction.js'
var arr=["全部","奇异果","苹果","橙柑橘柚","牛油果","牛排"]
class Classify_list extends React.Component{
    componentDidMount(){
        console.log(this)
        this.props.getData("classify_list.php",{name:this.props.params.name});

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
        const name=currentSpan.innerText;
        const type=currentLi.innerText;
        this.props.getData("allShow.php",{type:type}); 
    }
    // 价格排序
    order(event){
        var nav=document.getElementsByClassName('data_order')[0];
        var spans=nav.getElementsByTagName('span');
         for(var i=0;i<spans.length;i++){
            spans[i].style.color="#000";
      }   
       var currentSpan=event.target;
       if(currentSpan.className=="price"){
            currentSpan.nextSibling.firstChild.style.color="#75A739";
       }
        currentSpan.style.color="#75A739";
    }
    back(){
        this.props.router.goBack();
    }
    render(){
        return (
            <div id="datalist">
                <div className="data_top">
                    <div className="data_header">
                            <p><Icon type="left" onClick ={this.back.bind(this)}/></p>
                            <p>果园优选</p>
                            <p><Icon type="search" /></p>
                            
                    </div>
                    <div className="data_nav">
                        <ul >
                        {
                            arr.map(function(item,index){
                                return <li ref="changetype" key={index}><span onClick={this.change.bind(this)}>{item}</span></li>
                            }.bind(this))
                        }                 
                        </ul>
                    </div>
                    <ul className="data_order">
                        <li><span onClick={this.order}>综合</span></li>
                        <li><span onClick={this.order}>销量</span></li>
                        <li><span onClick={this.order} className="price">价格</span><p className="order"><Icon type="caret-up" /><Icon type="caret-down" /></p></li>
                    </ul>
                </div>
                <div className="data_content">
                    <Datalist data={this.props.dataset}></Datalist>
                </div>
            </div>
            )
    }
}
const mapToState=function(state){
    return {
        dataset:state.datagrid.response
    }
}
import './classify_list.scss'
export default connect(mapToState,listActions)(Classify_list)