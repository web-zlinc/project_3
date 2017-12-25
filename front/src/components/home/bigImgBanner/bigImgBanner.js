import React from 'react'
import { Icon } from 'antd';

class BigImgBanners extends React.Component{
    componentDidMount(){
        console.log('BigImgBanners complete!')
    }
    render(){
        return (
            <div>
                <div className="section space hotSale">
                    <a className="title">
                        <h2>
                            精选专题
                        </h2>
                    </a>
                </div>
                <div className="section bigImageBanner about-wrapper" >
                    <div className="about-text">
                        <a className={this.props.className}>
                            <img src=".\src\assets\images\bigImgBanner\2b313d0465477da62c09be8455a9c6ea.jpg" />
                        </a>
                    </div>
                </div>
                <div className="section has-recommend">
                    <div className="swiper-container">
                        <div className="seckill">
                            <ul>
                                {
                                    (function(self){
                                        if(self.props.red){
                                            return self.props.red.map(function(item,idx){
                                                return <li key={idx}>
                                                <a className="swiper-slide" >
                                                    <div className="img-box">
                                                        <img src={item.images} />
                                                    </div>
                                                    <p>{item.name}</p>
                                                    <div className="price">
                                                        <span className="money">
                                                            ￥{item.price}
                                                            <em> / {item.standard}</em>
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>
                                            })
                                        }
                                    })(this)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section bigImageBanner" >
                    <a className={this.props.className}>
                        <img src=".\src\assets\images\bigImgBanner\da0b12c173a699b5b6e1934ac16e7dba.jpg" />
                    </a>
                </div>
                <div className="section has-recommend">
                    <div className="swiper-container">
                        <div className="seckill">
                            <div className="seckill">
                                <ul>
                                    {
                                        (function (self) {
                                            if (self.props.red) {
                                                return self.props.red.map(function (item, idx) {
                                                    return <li key={idx}>
                                                        <a className="swiper-slide" >
                                                            <div className="img-box">
                                                                <img src={item.images} />
                                                            </div>
                                                            <p>{item.name}</p>
                                                            <div className="price">
                                                                <span className="money">
                                                                    ￥{item.price}
                                                                    <em> / {item.standard}</em>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                })
                                            }
                                        })(this)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BigImgBanners;