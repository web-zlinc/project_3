/* 
* @Author: sherah
* @Date:   2017-12-20 20:41:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-23 14:07:08
*/
import React from 'react';
import {connect} from 'react-redux'
import {Icon} from 'antd';
import {Link} from 'react-router'
class AllShowComponent extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            type: this.props.type
        };
    } 
    render(){
        if(!this.props.data){
            return null
        }
        return (
            <div className="allshow">
                <div><p className="tip">{this.props.type}</p><span>全部<Icon type="right" /></span></div>
                <div>
                    <dl>
                       {
                            this.props.data.map(function(obj,index){
                                return (
                            <Link to={"/classify/classify_list/"+obj.short_name+"/"+obj.type} key={index}>
                            <dt key={'dt'+index}><img src={obj.images} alt="" />
                            </dt>
                            <dd key={'dd'+index}>{obj.short_name}</dd>
                             </Link>)
                            })
                        }
                    
                    </dl>
                        
                </div>
            </div>
            )
    }
}
import './allShow.scss'
export default AllShowComponent
