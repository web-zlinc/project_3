import React from 'react'
import { Carousel } from 'antd';

class BrandBannerAdsComponent extends React.Component {
    componentDidMount(){
        console.log('BrandBanner complete!')
    }
    render(){
        return (
            <div>
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
            </div>
        )
    }
}

export default BrandBannerAdsComponent;