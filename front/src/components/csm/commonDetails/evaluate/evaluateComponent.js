import React from 'react'
import {Icon} from 'antd';
class EvaluateComponent extends React.Component{
    render(){
        if(!this.props.dataset){
            return null
        }
        return (
            <div className="crizity">
                    <div className="c_header">
                    <p>评价(<span>1794</span>)</p>
                    <p><span>98%</span>好评<Icon type="right" /></p>
                    </div>
                    <ul className="c_content">
                    {
                        this.props.dataset.map(function(item,index){
                            return (
                            <li key={index}>
                                <p><span>{item.username}</span><span>2017-12-24</span></p>
                                <p><span>口感5</span><span>颜值5</span></p>
                                <p className="user_content">{item.content}</p>
                            </li> 
                                )
                        })
                    }  
                    </ul>
                </div>
            )
    }
}
import './evaluate.scss'
export default EvaluateComponent