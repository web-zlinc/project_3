import React from 'react';
import { Icon , Carousel , Affix } from 'antd';
import { Link } from 'react-router'
import './home.scss';

export default class HomeComponent extends React.Component {
    render(){
        return (
            <div>
                <Affix>
                    <header className="home-header" style={{display: 'block'}}>
                        <div className="head">
                            <div className="position">
                                <div id="arri-time">
                                    <img src="./src/assets/images/ci_20171025_1.png" />
                                </div>
                            </div>
                            <Link to="search">

                                <Icon type="search">

                                </Icon>
                            </Link>
                        </div>
                    </header>
                </Affix>
                <section className="container home" style={{paddingTop: 10}}>
                    <div className="swiper-container home-swiper">
                        <div className="swiper-wrapper" >
                            <div className="swiper-slide">
                                <div>
                                    <Carousel autoplay>
                                        <div><img src="./src/assets/images/carousel/806de0753735cd73f85d9c7c606e5757.jpg" /></div>
                                        <div><img src="./src/assets/images/carousel/830ebe6b81e6f4b058c5c1c90bd73f9b.jpg" /></div>
                                        <div><img src="./src/assets/images/carousel/ad3c447bde89ac54aecad775bc3a50ab.jpg" /></div>
                                        <div><img src="./src/assets/images/carousel/d4394c18400dce62164cabd6cf7b2adc.jpg" /></div>
                                    </Carousel>
                                </div>
                                <div>
                                    <div className="section  brandBanner"> 
                                        <div className="flex advantage">  
                                            <a className="item"> 
                                                <img src="./src/assets/images/9a80964bf0201b57e8e9a4a382205fd7.png" /> 
                                            </a>  
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="section flex inner-range two-ads">
                                        <a>
                                            <img src=".\src\assets\images\adv\e7d6856c1d6007ac64114619c11a6c7b.jpg" />
                                        </a>
                                        <a>
                                            <img src=".\src\assets\images\adv\caa96ee4453a25ed3e58f4a8f73e736d.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="section flex composite space">
                                        <a className="left goToTab">
                                            <img src=".\src\assets\images\adv\9660d07715fa9eb2949ea2ef11b927eb.jpg" />
                                        </a>
                                        <div className="right">
                                            <a>
                                                <img src=".\src\assets\images\adv\ad5fe9fe4b715ecbffc0efb63b4c8540.jpg" />
                                            </a>
                                            <a>
                                                <img src=".\src\assets\images\adv\59e6a71280b833ca91364105ef7954af.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
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
                                <div>
                                    <div className="section space"> 
                                        <a className="title"> 
                                            <h2> 
                                                精选专题  
                                            </h2>  
                                        </a> 
                                    </div>
                                </div>
                                <div>
                                    <div className="section bigImageBanner" >
                                        <a>
                                            <img src=".\src\assets\images\bigImgBanner\2b313d0465477da62c09be8455a9c6ea.jpg" />
                                        </a>
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
                                <div>
                                    <div className="section bigImageBanner" >
                                        <a>
                                            <img src=".\src\assets\images\bigImgBanner\da0b12c173a699b5b6e1934ac16e7dba.jpg" />
                                        </a>
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
                                <div>
                                    <div className="section space">
                                        <a className="title">
                                            <h2>
                                                人气推荐
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}