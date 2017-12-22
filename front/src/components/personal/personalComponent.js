import React from 'react'
import { Form, Icon, Input, Button } from 'antd';

import './personal.scss'

export default class PersonalComponent extends React.Component{
    render(){
        return (
            <div id="p_container">
                <div className="p_head">
                    <Icon type="left" className="fl" />
                    <span>个人信息</span>
                </div>
                <div className="p_main">
                    <div className="pmt">
                        <span>头像</span>
                        <img/>
                    </div>
                    <ul className="pmc">
                        <li>
                            <span>呢称</span>
                            <span>15285601671</span>
                        </li>
                        <li>
                            <span>性别</span>
                            <span>保密</span>
                        </li>
                        <li>
                            <span>生日</span>
                            <span>未填写</span>
                        </li>
                        <li>
                            <span>地址管理</span>
                            <Icon type="right" />
                        </li>
                        <li>
                            <span>我的收藏</span>
                            <Icon type="right" />
                        </li>
                    </ul>
                </div>
            </div>
            )
    }
}