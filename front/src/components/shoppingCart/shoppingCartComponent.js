import React from 'react';
import './shoppingCart.scss';
import {Icon} from 'antd';

// 引入连接的方法,将state和action进行合并
import {connect} from 'react-redux'
// 引入action
import * as ShoppingCartActions from './shoppingCartAction'

// 引入中间部分的组件
import CartBodyComponent from './cartBody/cartBodyComponent';

class ShoppingCartComponent extends React.Component{


    render(){
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
                            <span onClick={this.props.toggleEdit}>{this.props.edit}</span>
                        </li>
                    </ul>
                </header>
                <div id="y_cart_Main">
                    <CartBodyComponent/>
                </div>



                <footer id="y_cart_footer">
                    <span className="y_select_all"><Icon className="y_checked_icon" type="check-circle-o" />全选</span>
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

    // 定义一个state，这个函数有一个默认的参数state
    const cartToState = function(state){
        console.log(state)
        return {
            edit:state.toggle
        }
    }
}

export default connect(cartToState,ShoppingCartActions)(ShoppingCartComponent)