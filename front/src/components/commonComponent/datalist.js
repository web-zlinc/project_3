/* 
* @Author: sherah
* @Date:   2017-12-22 17:15:14
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-23 12:05:54
*/
import React from 'react'
import {Icon} from 'antd';
import {Link} from 'react-router'
class Datalist extends React.Component{
    render(){
        if(!this.props.data){
            return null
        }
        return (
            <ul className="list">{
                this.props.data.map(function(item,index){
                    return (
                    <li key={index}>
                       <img src={item.images}/>
                       <div className="list_right">
                        <div className="r_top">
                            <p className="name">{item.name}
                            </p>
                            <p className="details">
                               {item.details}
                            </p>
                        </div>
                        
                        <p className="inventory">{item.standard}</p>
                        <div className="price">
                        <p>￥<span>{item.price}</span><span>明日达</span></p>
                            <p><Icon type="plus-circle-o" /></p>
                        </div>
                       </div>
                    </li>
                        )
                })
            }
               
            </ul>
            )
    }
}

import './datalist.scss'
export default Datalist