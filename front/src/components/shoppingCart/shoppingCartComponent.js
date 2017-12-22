import React from 'react';
import ReactDOM from 'react-dom';
import './shoppingCart.scss';
import {Icon} from 'antd';

// import Pic1 from '../../../assets/images/y_cart_pic1.jpg'


// 引入连接的方法,将state和action进行合并
import {connect} from 'react-redux'
// 引入action
import * as ShoppingCartActions from './shoppingCartAction'


var ShoppingCartComponent = React.createClass({
    getInitialState: function(){
        return {
            edit:"编辑",
            phone:'15285601671',//通过发送username(phone)从user表中获取用户的地址和username写入页面以及uid（用户自己独有的id）再通过uid从shoppingcart中获取gid（商品id）以及qty，再通过gid从goods表中获取商品信息
            uid:'',
            address:'',

        }
    },
    // 发起请求，拿到phone对应的用户信息
    componentDidMount(){
        this.props.getUserInfo({phone: this.state.phone})
        
    },
    componentWillupdate(){ 
        
        console.log(this.props.getUser[0].uid)
        this.props.getUsergid({uid: this.props.getUser[0].uid})
    },
    isEdit:function(e){
        this.setState({edit:e.target.innerHTML == "编辑" ? "完成" : e.target.innerHTML == "完成" ? "编辑" : "完成" })
    },

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
                            <span onClick={this.isEdit}>{this.state.edit}</span>
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
                                this.props.getUser.map(function(item,idx){
                                    return (
                                        <li className="y_cart_info" key={'li'+idx}>
                                            <Icon className="y_checked_icon" type="check-circle-o" />
                                            <div className="y_goods_pic">
                                                <img src={item.images} alt="error"/>
                                                <img src="./src/assets/images/classify/niu.png" alt="error"/>
                                            </div>
                                            <div className="y_goods_info">
                                                <h3 className="y_goods_name">{item.name}</h3>
                                                <h4 className="y_goods_standard">{item.standard}</h4>
                                                <p className="y_goods_price">
                                                    <small>￥</small>
                                                    <em>{item.price}</em>
                                                </p>
                                            </div>
                                            <div className="y_goods_count">
                                                <span onClick={this.props.add}><Icon type="minus-circle-o" /></span>
                                                <span className="y_goods_num">{item.qty}</span>
                                                <span onClick={this.props.sub}><Icon type="plus-circle-o" /></span>
                                            </div>
                                            <link to="/goodslist"></link>
                                        </li>
                                    )
                                }.bind(this))
                            }
                        </ul>
                    })
                </div>
                </div>


                <footer id="y_cart_footer">
                    <span className="y_select_all"><Icon onClick={this.props.selectAll} className="y_checked_icon" type="check-circle-o" />全选</span>
                    <span className="y_cart_total">
                        <em className="tt">合计：</em>
                        <em className="price">￥300.9</em>
                    </span>
                    <span className="y_cart_account">结算(88)</span>
                </footer>




                <div className="gonggong"></div>
            </div>
        )
    }

})
// 定义一个state，这个函数有一个默认的参数state
const cartToState = function(state){
    console.log(state)
    return {
        getUser:state.cart.response
    }
}

export default connect(cartToState,ShoppingCartActions)(ShoppingCartComponent)