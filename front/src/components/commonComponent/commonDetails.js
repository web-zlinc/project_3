import React from 'react'
import { Link} from 'react-router';
import { Input, Button, Icon, Layout, Row, Col } from 'antd';
class Details extends React.Component{
    back(){
       this.props.router.goBack();  
    }
    render(){
    return (
    <div id="details">
        <div className="data_header">
            <p><Icon type="left" onClick ={this.back.bind(this)}/></p>
            <p><span>详情</span></p>
            <p><Icon type="ellipsis" /></p>
                         
        </div>
        <div className="details_content">
            <div className="imgUrl">
            <img src="./src/assets/images/classify/qi1.jpg"/>
            </div>
            <div className="name">
                <p>佳沛新西兰绿奇异果(巨无霸)</p>
                <p>清新绿果 酸甜多汁</p>
                <p>￥<span>49.9</span></p>
                <div className="standard"><div><p>6个</p><p>明日达</p></div>
                </div>
        <p className="time">最快明天09:00-18:00送达</p>
            </div>

        </div>
        <div className="cart">
                    <Link to="/cart">
                        <Icon type="shopping-cart" className="cart"/>
                    </Link>
                </div>
    </div>
    )
    }
}
import './commonDetails.scss'
export default Details