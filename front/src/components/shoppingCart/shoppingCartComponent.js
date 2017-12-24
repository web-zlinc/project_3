import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './shoppingCart.scss';
import {Icon,Alert} from 'antd';
import $ from 'jquery';
import Loading from '../spinner/spinnerComponent.js'
import {Router, hashHistory, browserHistory} from 'react-router';

import FooterComponent from '../commonComponent/commonFoot.js'
// 引入连接的方法,将state和action进行合并
import {connect} from 'react-redux'
// 引入action
import * as ShoppingCartActions from './shoppingCartAction'
import AlertCom from './alertComponent/alertComponent'

class ShoppingCartComponent extends Component{
    constructor(props){
        super(props);
        this.state= {
            phone:'2',
            getUser:[],
            edit:"编辑",
            phone:'15027101120',
            uid:'',
            address:'',
            isEdit:true,
            totalPri:'0.00',
            totalQty:'0',
            buycarQty:[],
            checkProduct:[],
            isAlert:false,
            mess:"请选择您要购买的商品"

        }

    }
    // 发起请求，拿到phone对应的用户及购物车信息
    componentWillMount(){
        this.props.getUserInfo({phone: this.state.phone})
        
    }
    componentDidUpdate(){
        if(this.props.getUser && this.props.getUser.length>0){
            this.setState({getUser:JSON.parse(JSON.stringify(this.props.getUser))})
            this.showQty();
            this.isSelected()
        }
    }
    // buycarQty是一个装着商品数量的数组
    showQty(){
        var arr = [];
        for(var i=0;i<this.props.getUser.length;i++){
            arr.push(this.props.getUser[i].qty);
        }
        this.setState({buycarQty:arr});
        this.totalPrice();        
    }

    render(){
        if(!this.props.getUser){
            return null
        }
        return (
            <div className="container">
                <header id="y_cart_header">
                    <ul>
                        <li>
                            <Icon type="left" />
                        </li>
                        <li>
                            <span>购物车</span>
                        </li>
                        <li>
                            <span onClick={this.isEdit.bind(this)}>{this.state.edit}</span>
                        </li>
                    </ul>
                </header>

                <div id="y_cart_Main">
                    <div className="y_cart_address">
                    <div className="y_cart_Main_address">
                        <span className="y_address_name">{this.props.getUser[0].username}</span>
                        <span className="y_address_tel">{this.state.phone}</span>
                        <p>{this.props.getUser[0].address}</p>
                        <Icon className="y_right_arror" type="right" />
                    </div>
                </div>
                <div className="y_cart_Main_list">
                    <div className="y_cart_title">商品清单</div>

                        <ul className="y_cart_list_items" >
                            {
                                this.state.getUser.length > 0 ? 
                                this.state.getUser.map(function(item,idx){
                                    return (
                                        <li className="y_cart_info" key={'li'+idx}>
                                            <span onClick={this.isChecked.bind(this)} className="y_oneChecked"><Icon className="y_checked_icon" type="check-circle-o" /></span>
                                            <div key={'div'+idx} className="y_goods_pic">
                                                <img src={item.images} />
                                            </div>
                                            <div className="y_goods_info">
                                                <h3 className="y_goods_name">{item.name}</h3>
                                                <h4 className="y_goods_standard">{item.standard}</h4>
                                                <p className="y_goods_price">
                                                    <small>￥{this.state.totalPrice}</small>
                                                    <em>{item.price}</em>
                                                </p>
                                            </div>
                                            <div className={"y_goods_count"} data-guid={item.id}>
                                                <span><Icon type="minus-circle-o"  className="mins" onClick={this.minus.bind(this)}/></span>
                                                <span className="y_goods_num" ref="qty">{item.qty}</span>
                                                <span><Icon type="plus-circle-o"  className="plus" onClick={this.plus.bind(this)}/></span>
                                            </div>
                                        </li>
                                    )
                                }.bind(this)) : ''
                                
                            }
                        </ul>
                </div>
                </div>


                <footer id="y_cart_footer">
                    <span  onClick={this.isCheckall.bind(this)}><Icon className="y_checked_icon y_select_all" type="check-circle-o" /><i>全选</i></span>


                    <span className="y_cart_total" style={{display:this.state.isEdit ? 'block' : 'none'}}>
                        <em className="tt">合计：</em>
                        <em className="price">￥{this.state.totalPri}</em>
                    </span>
                    <span onClick={this.deleteAll.bind(this)} style={{display:this.state.isEdit ? 'none' : 'block'}}  className="clearCart" >清空购物车</span>

                    <span className="y_cart_account"  style={{display:this.state.isEdit ? 'block' : 'none'}} onClick={this.payment.bind(this)}>结算 ( {this.state.totalQty} )</span>
                    <span style={{display:this.state.isEdit ? 'none' : 'block'}} className="deleteCart">删除</span>
                </footer>
                <div className="gonggong">
                    <FooterComponent></FooterComponent>
                </div>

                <AlertCom isAlert={this.state.isAlert} mess={this.state.mess}/>

            </div>
        )
    }
    // 计算总价
    totalPrice(){
        var length = $('.y_oneChecked').length;
        var sum = 0;  
        var ttQty = 0;     
        for(var i=0; i<length;i++){
            if($('.y_oneChecked').eq(i).hasClass('y_checked')){
                // var unitPrice = ($('.y_oneChecked')[i].parents('li').find('.y_goods_price em').text())*1;
                var unitPrice = Number(this.state.getUser[i].price);
                
                var qty = ($('.y_oneChecked').parents('li').find('.y_goods_num').eq(i).text())*1;
            } else {
                // var unitPrice = Number($('.bc_che').eq(i).parents('li').find('.pro_price').text().slice(1));
                var unitPrice = 0;
                var qty = 0;
            }
            sum += unitPrice * qty;
            ttQty += qty;
        }
        sum = sum.toFixed(2);
        this.setState({totalPri:sum});
        this.setState({totalQty:ttQty});
    }
    
    // 右上角的编辑
    isEdit(e){
        
        this.setState({edit:e.target.innerHTML == "编辑" ? "完成" : e.target.innerHTML == "完成" ? "编辑" : "完成" })
        this.setState({isEdit:!this.state.isEdit})
    }
    // + -
    minus(e){
        var num = $(e.target).parents('.y_goods_count').find('.y_goods_num').html();
        num--;
        if(num<=0){
            num = 1
        }
        $(e.target).parents('.y_goods_count').find('.y_goods_num').html(num)
        this.totalPrice()
    }
    plus(e){
        var num = $(e.target).parents('.y_goods_count').find('.y_goods_num').html();
        num++;
        $(e.target).parents('.y_goods_count').find('.y_goods_num').html(num)
        
        this.totalPrice()

    }
    // 是否选中
    isChecked(event){
        $(event.target).parents('li').find('span').toggleClass('y_checked'); 
        this.totalPrice()
    }
     // 判断是否全选
    isSelected(){
        var checkProduct = [];
        for(var i=0;i<this.state.getUser.length;i++){
            if($('.y_oneChecked').eq(i).hasClass('y_checked')){
                checkProduct.push(this.state.getUser[i])
            }
        }
        this.setState({checkProduct:checkProduct});
        if(checkProduct.length == this.state.getUser.length){
            $('.y_select_all').addClass('y_checked')
        } 
    }
    // 全选
    isCheckall(event){
        $('.y_select_all').toggleClass('y_checked');
        
        if($('.y_select_all').hasClass('y_checked')){
            $('.y_oneChecked').addClass('y_checked');
        } else{
            $('.y_oneChecked').removeClass('y_checked')
        }
        this.totalPrice();
    }
    payment(e){
        var checkProduct = [];
        for(var i=0;i<this.state.getUser.length;i++){
            if($('.y_oneChecked').eq(i).hasClass('y_checked')){
                checkProduct.push(this.state.getUser[i])
            }
        }
        this.setState({checkProduct:checkProduct});
        if(checkProduct.length > 0){
            var account = this.state.totalPri;
            // hashHistory.push('/cartOrder/:' + JSON.stringify(checkProduct) + '/:'+ account);
            // 
            // checkProduct是选中商品的所有信息，是一个数组对象
            // 遍历提取相关信息插入order表中

            var goodsInfo=[];
            checkProduct.map(function(item,index){
                goodsInfo.push ({
                    images : item.images,
                    name : item.name,
                    standard : item.standard,
                    price : item.price,
                    qty : item.qty,
                })
                
            })
            var order = JSON.stringify({
                uid : checkProduct[0].uid,
                orderNo : 'P' + new Date().getTime(),
                username : checkProduct[0].username,
                phone :checkProduct[0].phone,
                address : checkProduct[0].address,
                totalPri : this.state.totalPri,
                goodsInfo : goodsInfo,
            })
            // 将order存起来
            window.localStorage.setItem("order",order)
            console.log(window.localStorage.getItem("order"))

            hashHistory.push('/cartOrder');

        } else{
            // alert('请选择您要购买的商品')
            this.setState({isAlert:true, mess:'请选择您要购买的商品'})
            setTimeout(()=>{
                this.setState({isAlert:false, mess:null})
            },3000);
        }
    }
    // 清空购物车
    deleteAll(e){
        this.props.delCart({uid: this.state.getUser[0].uid})

    }
   

}
const cartToState = function(state){
    return {
        loading: state.cart.loading,
        getUser:state.cart.response
    }
}

export default connect(cartToState,ShoppingCartActions)(ShoppingCartComponent)