import React from 'react'
import {hashHistory,Link} from 'react-router'
import { Form, Icon, Input, Button } from 'antd'


import './myorchard.scss';
import Footer from '../commonComponent/commonFoot'
export default class WyorchardComponent extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
            arr1:['积分','余额','优惠券','礼品'],
            arr2:['待付款','待发货','待收货','待评价','退换货'],
            arr3:['会员中心','我的收藏','在线客服','邮费特权'],
            hint:'登陆/注册',
            img:'',
            storage:[]
        }  
  
    }


    componentWillMount(){
        if(window.localStorage.data){
            console.log(22)
            this.state.storage=JSON.parse(window.localStorage.data);
            console.log(this.state.storage);
            this.state.hint=this.state.storage[0].phone;
            this.state.img=this.state.storage[0].portrait;
        }
    }

    breaklogin(){
        if(this.state.hint=='登陆/注册'){
             hashHistory.push('login');
        }
    }
    gopersonal(){
        if(this.state.img){
            hashHistory.push('/myorchard/personal');
        }
        if(!this.state.img){
            hashHistory.push('login');
        }
    }

    myorder(e){
        var currli=e.target.parentElement;
        if(currli.tagName.toLowerCase()==='li'||e.target.tagName.toLowerCase()==='li'){
            hashHistory.push('myorder');
        }
        if(e.target.tagName.toLowerCase()==='span'){
            hashHistory.push('myorder');
        }
    }
    gofavorite(e){
        if(e.target.innerText==='我的收藏'){
            hashHistory.push('/myorchard/favorite');
        }
    }
    render(){
        return (
            <div id="w_container">
                <div className="w_head">
                    <div className="h_top sa">
                        <div className="htl">
                            <img src={this.state.img} onClick={this.gopersonal.bind(this)}/>
                            <div className="htl_r">   
                                <p className="one" onClick={this.breaklogin.bind(this)}>{this.state.hint}</p>
                                <p className="two">签到送豪礼</p>
                            </div>
                        </div>
                        <div className="htr">
                            <Icon type="appstore" />
                            <span>会员码</span>
                        </div>
                    </div>
                    <ul className="h_bottom sa">
                        {
                            this.state.arr1.map((item,idx)=>{
                                return <li key={idx}><a>{item}</a><span>0</span></li>
                            })
                        }
                        
                    </ul>
                </div>
                <div className="w_main">
                    <div className="wm_h">
                        <div className="wmht">
                            <div>
                                <Icon type="exception" className="ord1" />
                                <span onClick={this.myorder.bind(this)}>我的订单</span>
                            </div>
                            <div>
                                <span onClick={this.myorder.bind(this)}>全部订单</span>
                                <Icon type="right" className="ord2" />
                            </div>
                        </div>
                        <ul className="wmhc">
                             {
                                this.state.arr2.map((item,idx)=>{
                                    return <li key={idx} onClick={this.myorder.bind(this)}><Icon type="folder-open" /><a>{item}</a></li>
                                })
                            }

                        </ul>
                    </div>
                    <div className="wm_m">
                        <ul className="wmmc">
                            {
                                this.state.arr3.map((item,idx)=>{
                                    return <li key={idx}>
                                    <a><Icon type="home" /><span onClick={this.gofavorite.bind(this)}>{item}</span></a>
                                    <Icon type="right" />
                                    </li>
                                })
                            }
                            
                        </ul>
                        
                    </div>
                </div>
                <Footer/>
            </div>
            )
    }
}