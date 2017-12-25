import React from 'react'
import {Icon} from 'antd';
class ContentComponent extends React.Component{
    render(){
        if(!this.props.dataset){
            return null
        }
        return (
        <div>
        {
            this.props.dataset.map(function(item,index){
                return (
                <div className="details_content" key={index}>
               <div className="imgUrl">
                <img src={item.images}/>
                </div>
                <div className="name">
                    <p>{item.name}</p>
                    <p>{item.details}</p>
                    <p>￥<span>{item.price}</span></p>
                    <div className="standard"><div><p>{item.standard}</p><p>明日达</p></div>
                    </div>
                <p className="time">最快明天09:00-18:00送达</p>
                </div>
                <div className="address"><p>送至  <Icon type="environment-o" /><span>景泰街道</span></p>
                </div>
                <div className="promiss">
                <p><span><Icon type="check-circle-o" />48小时退换货</span>
                <span><Icon type="check-circle-o" />全程冷链</span>
                <span><Icon type="check-circle-o" />果园标准</span>
                <span><Icon type="check-circle-o" />全球直采</span></p>
                </div> 
            </div>
                    )
            })
        }
           
        </div>
           

            )
    }
}
import './content.scss'
export default ContentComponent