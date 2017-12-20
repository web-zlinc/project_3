import React from 'react';
import './shoppingCart.scss';
import {Icon} from 'antd';

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
                            <span>编辑</span>
                        </li>
                    </ul>
                </header>
                <div id="y_cart_Main">
                    <CartBodyComponent/>
                </div>
                <footer id="y_cart_footer">
                    <span id="y_select_all"><Icon type="check-circle-o" />全选</span>
                </footer>

                <div className="gonggong"></div>
            </div>
        )
    }
}

export default ShoppingCartComponent;