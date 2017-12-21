import React from 'react'
import { Form, Icon, Input, Button } from 'antd';

import './myorchard.scss';
export default class WyorchardComponent extends React.Component{
    render(){
        return (
            <div id="w_container">
                <div className="w_head">
                    <div className="h_top sa">
                        <div className="htl">
                            <img src=""/>
                            <div className="htl_r">   
                                <p className="one">15285601671</p>
                                <p className="two">签到送豪礼</p>
                            </div>
                        </div>
                        <div className="htr">
                            <Icon type="appstore" />
                            <span>会员码</span>
                        </div>
                    </div>
                    <ul className="h_bottom sa">
                        <li>
                            <a>积分</a>
                            <span>0</span>
                        </li>
                        <li>
                            <a>余额</a>
                            <span>0</span>
                        </li>
                        <li>
                            <a>优惠券</a>
                            <span>0</span>
                        </li>
                        <li>
                            <a>礼品</a>
                            <span>0</span>
                        </li>
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
                            <li>
                                <Icon type="folder-open" />
                                <a>待付款</a>
                            </li>
                            <li>
                                <Icon type="folder-open" />
                                <a>待付款</a>
                            </li>
                            <li>
                                <Icon type="folder-open" />
                                <a>待付款</a>
                            </li>
                            <li>
                                <Icon type="folder-open" />
                                <a>待付款</a>
                            </li>
                            <li>
                                <Icon type="folder-open" />
                                <a>待付款</a>
                            </li>


                        </ul>
                    </div>
                    <div className="wm_m">
                        <ul className="wmmc">
                            <li>
                            <a><Icon type="home" /><span>会员中心</span></a>
                                <Icon type="right" />
                            </li>
                            <li>
                            <a><Icon type="home" /><span>会员中心</span></a>
                                <Icon type="right" />
                            </li>
                            <li>
                                <a><Icon type="home" /><span>会员中心</span></a>
                                <Icon type="right" />
                            </li>
                            <li>
                                <a><Icon type="home" /><span>会员中心</span></a>
                                <Icon type="right" />
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            )
    }
}