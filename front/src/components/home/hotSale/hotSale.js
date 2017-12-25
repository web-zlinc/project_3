import React from 'react';
// import $ from 'jquery';

import { Link } from 'react-router';
import { Icon, Modal } from 'antd';

class HotSale extends React.Component {
    constructor() {
        super();
        this.state = {
            className: 'hidden',
            dialogState: 'none'
        }
    }
    // 判断登录状态
    judgeLogin(){
        // console.log(window.localStorage.data)
        let loginState = window.localStorage.data;
        // console.log(loginState)
        if(loginState != undefined && loginState != '[]'){
            console.log('添加成功')
            // console.log(this);
        }else {
            this.setState({dialogState: 'block'})
            console.log('您未登录')
            // console.log(this.refs.loginS)

            // $(this.refs.loginS).addClass('animated hinge');
        }
    };
    closeDiv(){
        this.setState({dialogState: 'none'})
    }

    render(){
        return (
            <div>
                <div className="section space hotSale">
                    <h2>鲜果热卖</h2>
                </div>
                <div className="section recommends">
                    <div className="list recommends-list">
                        <a className="item">
                            <div className="img-box">
                                <img src=".\src\assets\images\adv\1-370x370-3744-17R7KS8S.jpg" />
                            </div>
                            <div className="desc">
                                <h5>橙先生 -18K（L）</h5>
                                <p>全球极少数橙子能成为橙先生</p>
                                <div className="tag">搭配省20元</div>
                                <div className="price">
                                    <span className="money">
                                        ￥29.8 /
                                        <em>1kg</em>
                                    </span>
                                    <span ref="loginS" onClick={this.judgeLogin.bind(this)}>
                                        <Icon type="plus-circle-o">
                                            
                                        </Icon>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="section has-recommend">
                    <div className="swiper-container">
                        <div className="seckill">
                            <a className="swiper-slide" >
                                <div className="img-box">
                                    <img src=".\src\assets\images\adv\1-370x370-3745-S8YSYH5P.jpg" />
                                </div>
                                <p>智利甜心樱桃</p>
                            </a>
                            <a className="swiper-slide" >
                                <div className="img-box">
                                    <img src=".\src\assets\images\adv\1-370x370-3745-S8YSYH5P.jpg" />
                                </div>
                                <p>智利甜心樱桃</p>
                            </a>
                            <a className="swiper-slide" >
                                <div className="img-box">
                                    <img src=".\src\assets\images\adv\1-370x370-3745-S8YSYH5P.jpg" />
                                </div>
                                <p>智利甜心樱桃</p>
                            </a>
                            <a className="swiper-slide" >
                                <div className="img-box">
                                    <img src=".\src\assets\images\adv\1-370x370-3745-S8YSYH5P.jpg" />
                                </div>
                                <p>智利甜心樱桃</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="dialog" id="fruitday-panel" style={{display: this.state.dialogState}}>
                    <div className="dialog-content" style={{marginTop:-75,top:'50%'}}>
                        <div className="panel-content" style={{maxHeight: 690}}>
                            <div className="panel-cell">
                                <div className="panel-text text-c">
                                    您还没有登录，登录可以解锁更多功能哦~
                                </div>
                            </div>
                        </div>
                        <div className="panel-buttons">
                            <div className="options">
                                <a className="btn btn-default" onClick={this.closeDiv.bind(this)}>我就不</a>
                                <Link to="/login" className="btn btn-primary">
                                    去登陆
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default HotSale;