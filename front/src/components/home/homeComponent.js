import React from 'react';
import { Icon, Affix, Tabs } from 'antd';
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import axios from 'axios';

import HBackTop from '../commonComponent/backTop'
import BigImgBanners from './bigImgBanner/bigImgBanner'
import BrandBannerAds from './brandBannerAds/brandBannerAds'
import MiddleAdv from './middleAdv/middleAdv'
import HotSale from './hotSale/hotSale'
import RecommendFruit from './recommend/recommend'
import TopMenu from './topMenu/topMenu'
import Unlimited from './Unlimited/unlimited'
import WechatGift from './wechatGift/wcgift'
import CommonFooter from '../commonComponent/commonFoot'

import * as searchActions from './recommend/recommendAction'

import './home.scss';

const TabPane = Tabs.TabPane;

class HomeComponent extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            _loginState: this.props.params.status,
            _text: 123,
            _getData: [],
            _currentUrl: '',
            _path: 'http://localhost:5555/php/HsearchForRecommend.php'
        };
        // console.log(this.state._loginState)
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
                // console.log(self.state._getData)
            })
        }
    }
    componentWillMount() {
        let ajaxUrl = this.state._path;
        this.AxiosGet(ajaxUrl);
    }
    render(){
        return (
            <div>
                <TopMenu />
                <Tabs defaultActiveKey="1">
                    <TabPane tab="精选推荐" key="1">
                        <section className="container home" style={{ paddingTop: 10 }}>
                            <div className="swiper-container home-swiper">
                                <div className="swiper-wrapper" >
                                    <div className="swiper-slide">
                                        <BrandBannerAds />
                                        <MiddleAdv />
                                        <HotSale red={this.state._getData} />
                                        <BigImgBanners red={this.state._getData} className={this.state.className} />
                                        <RecommendFruit red={this.state._getData} />
                                    </div>
                                </div>
                            </div>
                            {/* <div id="backTop" onClick={this.scrollTop.bind(this)}>返回顶部</div> */}
                        </section>
                        <CommonFooter />
                    </TabPane>
                    <TabPane tab="限时特惠" key="2">
                        <Unlimited />
                    </TabPane>
                    <TabPane tab="点击就送" key="3">
                        <WechatGift />
                    </TabPane>
                </Tabs>
                <HBackTop />
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