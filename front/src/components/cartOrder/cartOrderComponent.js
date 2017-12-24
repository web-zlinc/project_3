import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './cartOrder.scss';
import {Icon} from 'antd';
import $ from 'jquery';
import {router, hashHistory, browserHistory} from 'react-router';

// 引入连接的方法,将state和action进行合并
import {connect} from 'react-redux'
// 引入action
import * as cartOrderActions from './cartOrderAction'

class CartOrderComponent extends Component{
    constructor(props){
        super(props);
        this.state= {
            order:JSON.parse(localStorage.getItem("order")),
            goodsInfo:JSON.parse(localStorage.getItem("order")).goodsInfo,
            gouma:true,
            totalPri:''
        }

    }
    componentWillMount(){
        var o = JSON.parse(localStorage.getItem("order"))
        this.setState({order:o})
        if(o.totalPri <= 99){
            this.setState({gouma:false})
        }
        
    }
    componentDidMount(){
        this.setState({totalPri:this.state.order.totalPri*1+this.refs.yunfei.innerHTML*1})

    }
    goback(e){
        hashHistory.push('/cart');
    }
    render(){
        return (
            <div className="container">
                <header id="y_cart_header">
                    <ul>
                        <li>
                            <Icon type="left"  onClick = {this.goback}/>
                        </li>
                        <li>
                            <span>确认订单</span>
                        </li>
                        <li>
                        </li>
                    </ul>
                </header>

                <div id="y_cart_Main">
                    <div className="y_cart_address">
                        <div className="y_cart_Main_address">
                            <span className="y_address_name">{this.state.order.username}</span>
                            <span className="y_address_tel">{this.state.order.phone}</span>
                            <p>{this.state.order.address}</p>
                        </div>
                    </div>


                    <ul className="orderInfo">
                        <li className="bao">
                            <span>包裹1<i>明日达</i></span>
                            <span>2件商品,重5kg</span>
                        </li>
                        <li className="song">
                            <span>送达时间</span>
                            <span>12月27日|周三 09:00-18:00</span>
                        </li>


                        <li className="goods">
                            <ul>
                               {
                                    this.state.goodsInfo.map(function(item,idx){
                                        return (
                                            <li key={'li'+idx}>
                                                <div  className="y_goods_pic">
                                                    <img  src={item.images}/>
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
                                    })
                                }   
                            </ul>
                        </li>



                        <li className="pei">
                            <span>配送费</span>
                            <span>￥<em ref="yunfei">{this.state.gouma ? 10 : 20}</em></span>
                        </li>
                        <li className="you">
                            <span>优惠券<i>0张可用</i></span>
                            <span>无可用<Icon type="right" /></span>
                        </li>
                        <li className="gong">
                            <span>共2件商品，5.00kg</span>
                            <span>合计：<em>￥{this.state.totalPri}</em></span>
                        </li>
                    </ul>
                </div>
                <div className="orderFooter">
                    <span>待支付：￥<em>{this.state.totalPri}</em></span>
                    <span>提交订单</span>
                </div>
            </div>
        )
    }
  


}
const cartToState = function(state){
    return {
        loading: state.cart.loading,
        getUser:state.cart.response
    }
}

export default connect(cartToState,cartOrderActions)(CartOrderComponent)