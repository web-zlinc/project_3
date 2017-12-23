import React from 'react';
import { Icon , Affix , BackTop } from 'antd';
import { browserHistory } from "react-router";

import BackTopComponent from '../commonComponent/commonBackTop'
import BigImgBanners from './bigImgBanner/bigImgBanner'
import BrandBannerAds from './brandBannerAds/brandBannerAds'
import MiddleAdv from './middleAdv/middleAdv'
import HotSale from './hotSale/hotSale'
import RecommendFruit from './recommend/recommend'
import TopMenu from './topMenu/topMenu'

import './home.scss';

export default class HomeComponent extends React.Component {
<<<<<<< HEAD
    constructor() {
        super();
        this.state = {
            className: 'hidden'
        }
    }
    scrollTop(){
        scrollTo(0,0)
=======
 
    scrollTop(){
        scrollTo(0,0)
    }
    constructor(props){
        super(props);
        this.state = {
            _currentUrl: '',
            _path : []
        };
        // console.log(this.state)
    }
    componentDidMount() {
        // this.setState({_currentUrl: this.props.location.pathname})
        this.state._path.push(this.props.location.pathname)
        // console.log(this.props.location.pathname)
        // console.log(this.state)

>>>>>>> 6013d2a6ce0fcd0ab259f7978f2858f30de9ba5e
    }

    // componentDidMount() {
    //     window.addEventListener('scroll',() => {
    //         let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    //         if(scrollTop > 799){
    //             this.changeState();
    //         }
    //     });
    // }
    render(){
        return (
            <div>
                <TopMenu />
                <section className="container home" style={{paddingTop: 10}}>
                    <div className="swiper-container home-swiper">
                        <div className="swiper-wrapper" >
                            <div className="swiper-slide">
                                <BrandBannerAds />
                                <MiddleAdv />
                                <HotSale />
                                <BigImgBanners className={this.state.className} />
                                <RecommendFruit />
                            </div>
                        </div>
                    </div>
                    <div id="backTop" onClick={this.scrollTop.bind(this)}>返回顶部</div>
                </section>
            </div>
        )
    }
}