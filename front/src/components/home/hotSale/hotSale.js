import React from 'react'
import { Icon } from 'antd';

class HotSale extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <div className="section space hotSale">
                        <h2 >鲜果热卖</h2>
                    </div>
                </div>
                <div>
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
                                        <Icon type="plus-circle-o" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
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
                </div>
            </div>
        ) 
    }
}

export default HotSale;