import React from 'react'
import {Link} from 'react-router'
import { Form, Icon, Input, Button } from 'antd'


import './myorchard.scss';

export default class WyorchardComponent extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
            arr1:['积分','余额','优惠券','礼品'],
            arr2:['待付款','待发货','待收货','待评价','退换货'],
            arr3:['会员中心','我的收藏','在线客服','邮费特权'],
            Storage:JSON.parse(window.localStorage.data)
        }  
  
    }

    render(){
        return (
            <div id="w_container">
                <div className="w_head">
                    <div className="h_top sa">
                        <div className="htl">
                            <Link to="/myorchard/personal"><img src={this.state.Storage[0].portrait}/></Link>
                            <div className="htl_r">   
                                <p className="one">{this.state.Storage[0].phone}</p>
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
                                <span>我的订单</span>
                            </div>
                            <div>
                                <span>全部订单</span>
                                <Icon type="right" className="ord2" />
                            </div>
                        </div>
                        <ul className="wmhc">
                             {
                                this.state.arr2.map((item,idx)=>{
                                    return <li key={idx}><Icon type="folder-open" /><a>{item}</a></li>
                                })
                            }

                        </ul>
                    </div>
                    <div className="wm_m">
                        <ul className="wmmc">
                            {
                                this.state.arr3.map((item,idx)=>{
                                    return <li key={idx}>
                                    <a><Icon type="home" /><span>会员中心</span></a>
                                    <Icon type="right" />
                                    </li>
                                })
                            }
                            
                        </ul>
                        
                    </div>
                </div>
            </div>
            )
    }
}