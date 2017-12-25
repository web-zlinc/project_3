import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './pay.scss';
import {Icon} from 'antd';
import $ from 'jquery';
import {router, hashHistory, browserHistory} from 'react-router';

// 引入连接的方法,将state和action进行合并
import {connect} from 'react-redux'
// 引入action
import * as payActions from './payAction'

class PayComponent extends Component{
    constructor(props){
        super(props);
        this.state= {
            phone:'15027101120',
            getUser:[],
            edit:"编辑",
            isEdit:true,
            totalPri:'0.00',
            totalQty:'0',
            buycarQty:[],
            checkProduct:[],
            isAlert:false,
            mess:null

        }

    }
    goback(e){
        history.back()

        // hashHistory.push('/cart');
    }
    // 发起请求，拿到phone对应的用户及购物车信息
    componentWillMount(){
        var info = JSON.parse(window.localStorage.getItem('order'))
        console.log(info)
        this.props.getOrderInfo({phone: info.phone})
        
    }
    render(){
        var now = new Date().toLocaleString()
        var info = JSON.parse(window.localStorage.getItem('order'))
        return (
            <div className="container">
                <header id="y_pay_header">
                    <ul>
                        <li>
                            <Icon type="left"  onClick = {this.goback}/>
                        </li>
                        <li>
                            <span>订单详情</span>
                        </li>
                        <li>
                            <Icon type="phone" />
                        </li>
                    </ul>
                </header>

                <div id="y_pay_Main">
                    <div className="dai">
                        <span>
                            <Icon type="switcher" />
                        </span>
                        <div>  
                            <p>待付款</p>
                            <p>请在15分钟内完成支付，否则订单将被取消</p>
                            <p>{now}</p>
                        </div>
                    </div>
                    <ul className="ding">
                        <li>
                            <span>订单编号：</span>
                            <span>P1739825432</span>
                        </li>
                        <li className="shou">
                            <span>收货地址：</span>
                            <div>
                                <span>{info.username}</span>
                                <span>{info.phone}</span>
                                <p>{info.address}</p>
                            </div>
                        </li>
                        <li>
                            <span>送达时间：</span>
                            <span>2017899877</span>
                        </li>
                    </ul>
                    <div  className="goods">
                        <h3>1件商品，重1kg</h3>
                        <ul className="infor">
                            {
                                info.goodsInfo.length > 0 ? 
                                info.goodsInfo.map(function(item,idx){
                                    return (
                                        <li key={'li'+idx}>
                                            <div  className="y_goods_pic">
                                                <img src={item.images}/>
                                            </div>
                                            <div className="y_goods_info">
                                                <h4 className="y_goods_name">{item.name}</h4>
                                                <h5 className="y_goods_standard">{item.standard}</h5>
                                            </div>
                                            <div className="y_goods_right">
                                                <span>x{item.qty}
                                                    <em>￥{item.price}</em>
                                                </span>
                                            </div>
                                        </li>
                                    )
                                }.bind(this)) : '购物车空空空'
                            }
                        </ul>
                    </div>
                    <ul className="jia">
                        <li>
                            <span>商品总价</span>
                            <span>￥ {info.totalPri}</span>
                        </li>
                        <li>
                            <span>配送费</span>
                            <span>￥ {info.totalPri>100?10:20}</span>
                        </li>
                        <li>
                            <span>实付金额：</span>
                            <span>￥ {(info.totalPri)*1 + ((info.totalPri>100)?10:20)*1}</span>
                        </li>
                    </ul>
                    <div className="fa">
                        <p>发票信息：未开发票</p>
                        <p>支付方式：微信支付</p>
                        <p>支付状态：还未付款</p>
                        <p>下单时间：{now}</p>
                    </div>
                 
                </div>
                <div id="payFooter">
                    <span>取消订单</span>
                    <span>立即支付</span>
                </div>
            </div>
        )
    }
  


}
const payToState = function(state){
    return {

    }
}

export default connect(payToState,payActions)(PayComponent)