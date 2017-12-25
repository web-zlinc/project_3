import React from 'react';
import { Icon , Affix , BackTop } from 'antd';
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import axios from 'axios';

import BackTopComponent from '../commonComponent/commonBackTop'
import BigImgBanners from './bigImgBanner/bigImgBanner'
import BrandBannerAds from './brandBannerAds/brandBannerAds'
import MiddleAdv from './middleAdv/middleAdv'
import HotSale from './hotSale/hotSale'
import RecommendFruit from './recommend/recommend'
import TopMenu from './topMenu/topMenu'
import CommonFooter from '../commonComponent/commonFoot'

import * as searchActions from './recommend/recommendAction'

import './home.scss';

class HomeComponent extends React.Component {
 
    scrollTop(){
        scrollTo(0,0)
    }
    constructor(props){
        super(props);
        this.state = {
            _text: 123,
            _getData: [],
            _currentUrl: '',
            _path: 'http://localhost:5555/php/HsearchForRecommend.php'
        };
        // console.log(this.state)
        this.AxiosGet=(url)=>{
            var self = this;
            console.log(url)
            axios({
                method: 'POST',
                url: url,
            }).then(function(res){
                self.setState({
                    _getData: res.data
                })
                console.log(self.state._getData)
            })
        }
    }
    componentDidMount() {
        let ajaxUrl = this.state._path;
        this.AxiosGet(ajaxUrl);
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
                                <HotSale  />
                                <BigImgBanners className={this.state.className} />
                                <RecommendFruit text={this.state._getData} />
                            </div>
                        </div>
                    </div>
                    <div id="backTop" onClick={this.scrollTop.bind(this)}>返回顶部</div>
                </section>
                <CommonFooter />
            </div>
        )
    }
}

const mapToState = function (state) {
    return {
        dataset: state.searchRecommend.response
    }
}

export default connect(mapToState, searchActions)(HomeComponent)