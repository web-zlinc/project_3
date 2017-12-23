import React from 'react'
import {hashHistory,Link} from 'react-router'
import { Form, Icon, Input, Button } from 'antd'
import './myorder.scss'

export default class MyorderComponent extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
            arr1:['全部','待付款','待发货','待收货','待评价']
        }  
  
    }
    componentDidMount(){
        var allli=document.getElementsByClassName('sa');
        allli[0].classList.add('active');
    }
    click(e){
        var currli=e.target;
        var allli=document.getElementsByClassName('sa');
        for(var i=0;i<allli.length;i++){
                allli[i].className="sa";
        }
        currli.classList.add('active');
    }
    back(){
        this.props.router.goBack()
    }
    render(){
        return(
            <div id="o_container">
                <div className="oc_top">
                    <Icon type="left" className="fl" onClick={this.back.bind(this)} />
                    <span>我的订单</span>
                </div>
                <div className="oc_nav">
                    <ul>
                        {
                            this.state.arr1.map((item,idx)=>{
                                return  <li className="sa" key={idx} onClick={this.click.bind(this)}>
                                            {item}
                                        </li>
                            })
                        }
                    </ul>
                </div>
                <div className="oc_main">
                    <ul>
                        <li>
                            <p className="one">
                                <span>P17122327263316</span>
                                <span>已取消</span>
                            </p>
                            <div className="sdel">
                                <img src="./src/assets/images/classify/apple.png"/>
                                <div className="sdr">
                                    <p>
                                        <span className="fl">新疆阿克苏冰糖心苹果</span>
                                        <span className="fr">x1</span>
                                    </p>
                                    <p className="unit ">78.0克/袋</p>
                                </div>
                            </div>
                            <p className="two">
                            共1件商品 合计: <span className="pri">49.80</span>(含运费￥20.00)
                            </p>
                            <p className="three">
                                <span>删除订单</span>
                                <span>取消订单</span>
                            </p>
                        </li>
                        <li>
                            <p className="one">
                                <span>P17122327263316</span>
                                <span>已取消</span>
                            </p>
                            <div className="sdel">
                                <img src="./src/assets/images/classify/apple.png"/>
                                <div className="sdr">
                                    <p>
                                        <span className="fl">新疆阿克苏冰糖心苹果</span>
                                        <span className="fr">x1</span>
                                    </p>
                                    <p className="unit ">78.0克/袋</p>
                                </div>
                            </div>
                            <p className="two">
                            共1件商品 合计: <span className="pri">49.80</span>(含运费￥20.00)
                            </p>
                            <p className="three">
                                <span>删除订单</span>
                                <span>取消订单</span>
                            </p>
                        </li>
                        <li>
                            <p className="one">
                                <span>P17122327263316</span>
                                <span>已取消</span>
                            </p>
                            <div className="sdel">
                                <img src="./src/assets/images/classify/apple.png"/>
                                <div className="sdr">
                                    <p>
                                        <span className="fl">新疆阿克苏冰糖心苹果</span>
                                        <span className="fr">x1</span>
                                    </p>
                                    <p className="unit ">78.0克/袋</p>
                                </div>
                            </div>
                            <p className="two">
                            共1件商品 合计: <span className="pri">49.80</span>(含运费￥20.00)
                            </p>
                            <p className="three">
                                <span>删除订单</span>
                                <span>取消订单</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}