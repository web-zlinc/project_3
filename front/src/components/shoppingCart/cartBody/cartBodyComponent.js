import React from 'react';
import './cartBody.scss'
import {Icon} from 'antd';
import '../../../../libs/base.css'


class ShoppingCartComponent extends React.Component{

    render(){
        return (
            <div>
                <div className="y_cart_address">
                    <div className="y_cart_Main_address">
                        <span className="y_address_name">兜兜</span>
                        <span className="y_address_tel">13723444495</span>
                        <p>上海市松江区</p>
                        <Icon className="y_right_arror" type="right" />
                    </div>
                </div>
                <div className="y_cart_Main_list">
                    <div className="y_cart_title">商品清单</div>
                    <ul className="y_cart_list_items">
                        <li>
                            <Icon type="y_check-circle-o" />
                            <div className="y_goods_pic fl">
                                <img src={"../../../utils/imgs/y_cart_pic1.jpg"}/>
                            </div>
                            <div className="y_goods_info fl">
                                <h3 className="y_goods_name">智利甜心樱桃</h3>
                                <h4 className="y_goods_standard">500g</h4>
                                <p className="y_goods_price">
                                    <small>￥</small>
                                    <em>49.9</em>
                                </p>
                            </div>
                            <div className="y_goods_count">
                                <span><Icon type="minus-circle-o" /></span>
                                <span className="y_goods_num">1</span>
                                <span><Icon type="plus-circle-o" /></span>
                            </div>
                            <link to="/goodslist"></link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCartComponent;