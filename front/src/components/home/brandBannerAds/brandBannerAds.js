import React from 'react'
import { Carousel } from 'antd';
import $ from 'jquery';

class BrandBannerAdsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _dayThis: this,
            _dayNews: [
                '积分将过期，好礼抢兑ing',
                '【第2件9.9】广西甘蔗大特卖',
                '积分将过期，好礼抢兑ing'
            ]
        }
    }
    componentDidMount(){
        console.log('BrandBanner is compelete!')
        setInterval(() => {
            $('.rollNews ul').stop().animate({top: -95});
            if ($('.rollNews ul').css('top') === '-95px'){
                $('.rollNews ul').stop().animate({ top: -190 },function(){

                    $('.rollNews ul').stop().css('top','0')
                });
            }
        }, 2000);
    }
    render(){
        return (
            <div>
                <Carousel autoplay>
                    <div><img src="./src/assets/images/carousel/806de0753735cd73f85d9c7c606e5757.jpg" /></div>
                    <div><img src="./src/assets/images/carousel/830ebe6b81e6f4b058c5c1c90bd73f9b.jpg" /></div>
                    <div><img src="./src/assets/images/carousel/ad3c447bde89ac54aecad775bc3a50ab.jpg" /></div>
                    <div><img src="./src/assets/images/carousel/d4394c18400dce62164cabd6cf7b2adc.jpg" /></div>
                </Carousel>
                <div className="section  brandBanner">
                    <div className="flex advantage">
                        <a className="item">
                            <img src="./src/assets/images/9a80964bf0201b57e8e9a4a382205fd7.png" />
                        </a>
                    </div>
                </div>
                <div className="section flex inner-range two-ads">
                    <a>
                        <img src=".\src\assets\images\adv\e7d6856c1d6007ac64114619c11a6c7b.jpg" />
                    </a>
                    <a>
                        <img src=".\src\assets\images\adv\caa96ee4453a25ed3e58f4a8f73e736d.jpg" />
                    </a>
                </div>
                <div className="section" style={{paddingBottom: '.14rem'}}>
                    <a href="#/merry">
                        <img src=".\src\assets\images\bigImgBanner\bigGIF.gif" />
                    </a>
                </div>
                <div className="rollNews">
                    <h2>天天快报</h2>
                    <ul>
                        {
                            (function(self){
                                return self.state._dayNews.map(function(item,idx){
                                    return <li key={idx}>
                                            <a>{item}</a>
                                        </li>
                                })
                            })(this.state._dayThis)
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

export default BrandBannerAdsComponent;