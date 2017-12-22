/* 
* @Author: sherah
* @Date:   2017-12-20 20:41:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-22 20:22:32
*/
import React from 'react';
import {connect} from 'react-redux'
import {Icon} from 'antd';
import {Link} from 'react-router'
import * as allShowActions from '../../datagrid/datagridAction.js'
class AllShowComponent extends React.Component{ 
      shouldComponentUpdate(nextProps, nextState){
         var type=this.props.type;
        var url=this.props.url;
        this.props.getData(url,{type:type});
            return true 
     }
     componentDidMount(){
        var type=this.props.type;
        var url=this.props.url;
        this.props.getData(url,{type:type});

     }
    render(){
        if(!this.props.dataset){
            return null
        }
        return (
            <div className="allshow">
                <div><p className="tip">{this.props.type}</p><span>全部<Icon type="right" /></span></div>
                <div>
                    <dl>
                        {
                            this.props.dataset.map(function(obj,index){
                                return (
                            <Link to="/classify/classify_list" key={index}>
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
const mapToState=function(state){
    return {
        dataset:state.allshow.response
    }
}
import './allShow.scss'
export default connect(mapToState,allShowActions)(AllShowComponent)
