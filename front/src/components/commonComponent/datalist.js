/* 
* @Author: sherah
* @Date:   2017-12-22 17:15:14
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-22 20:18:05
*/
import React from 'react'
import {Icon} from 'antd';
import {Link} from 'react-router'
class Datalist extends React.Component{
    componentWillMount(){
        console.log()
    }
    render(){
        return (
            <ul className="list">
                 <li>
                   <img src="./src/assets/images/classify/qi.png"/>
                   <div className="list_right">
                    <div className="r_top">
                        <p className="name">佳沛意大利金奇异果6个
                        </p>
                        <p className="details">
                            当季水果 甜滋水润
                        </p>
                    </div>
                    
                    <p className="inventory">6个</p>
                    <div className="price">
                    <p>￥<span>49.0</span><span>明日达</span></p>
                        <p><Icon type="plus-circle-o" /></p>
                    </div>
                   </div>
                </li>
            </ul>
            )
    }
}
import './datalist.scss'
export default Datalist