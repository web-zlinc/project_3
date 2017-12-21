import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
class ClassifyComponent extends React.Component{
    render(){
        return (
                <div id="classify_container">
                    <div className="classify_top"></div>
                    <div className="classify_content">
                        <div className="left">
                            <ul>
                            <li><span><Link to="/classify/allShow">果园优选</Link>
                                </span></li>
                                <li><span>新鲜水果</span></li>
                                <li><span>水产海鲜</span></li>
                                <li><span>肉禽蛋类</span></li>
                                <li><span>乳品速食</span></li>
                                <li><span>时令鲜蔬</span></li>
                                <li><span>烘焙料理</span></li>
                                <li><span>粮油干货</span></li>
                                <li><span>酒水饮料</span></li>
                                <li><span>礼盒券卡</span></li>
                                <li><span>果园周边</span></li>
                            </ul>
                         </div>
                        <div className="right">{this.props.children}
                        </div>
                    </div>
                    
                </div>
            )
    }
}
import './classify.scss'
export default ClassifyComponent