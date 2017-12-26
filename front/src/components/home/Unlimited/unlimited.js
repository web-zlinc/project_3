import React from 'react';

import { Tabs, Carousel, Spin } from 'antd';

const TabPane = Tabs.TabPane;

class Unlimited extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabBarStyle: {
                fontSize: '.1rem'
            }

        };
    }
    render(){
        const { style } = this.state.tabBarStyle;
        return (
            <div>
                <Carousel>
                    <div>
                        <img src=".\src\assets\images\bigImgBanner\limited1.png" />
                    </div>
                </Carousel>
                <div>
                    <img src=".\src\assets\images\bigImgBanner\limited2.png" />
                </div>
                <Tabs defaultActiveKey="1" style={{fontSize: '.28rem'}} >
                    <TabPane tab="10:00" key="1">
                        <div className="limitedLoading">
                            <Spin size="large"/>
                            <p>维护中...</p>
                        </div>
                    </TabPane>
                    <TabPane tab="15:00" key="2">
                        <div className="limitedLoading">
                            <Spin size="large"/>
                            <p>维护中...</p>
                        </div>
                    </TabPane>
                    <TabPane tab="20:00" key="3">
                        <div className="limitedLoading">
                            <Spin size="large"/>
                            <p>维护中...</p>
                        </div>
                    </TabPane>
                </Tabs>
                <div id="limitedFoot">
                    <h4>规则：</h4>
                    <ul>
                        <li>·1、每天限时限量</li>
                        <li>·2、秒杀商品不包邮</li>
                        <li>·3、秒杀以提交订单付款为准，加入购物车不计入秒杀成功</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Unlimited ;