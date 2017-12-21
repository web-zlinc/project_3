/* 
* @Author: sherah
* @Date:   2017-12-20 20:41:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-21 20:48:13
*/
import React from 'react';
import {connect} from 'react-redux'
import {Icon} from 'antd';
import * as allShowActions from '../../datagrid/datagridAction.js'
class AllShowComponent extends React.Component{
    shouldComponentUpdate(newProps, newState){
        var url=this.props.url;
        var type=this.props.type;
            this.props.getData(url,{type:this.props.type});
            return true       
    }
     componentDidMount(){
        var url=this.props.url;
        var type=this.props.type;
            this.props.getData(url,{type:this.props.type}); 
     }
    render(){
        if(!this.props.dataset){
            return null
        }
        return (
            <div className="allshow">
                <div><p>{this.props.type}<span>全部<Icon type="right" /></span></p></div>
                <div>
                    <dl>
                        {
                            this.props.dataset.map(function(obj,index){
                                return (
                                <a key={index}>
                            <dt key={'dt'+index}><img src={obj.images} alt="" />
                            </dt>
                            <dd key={'dd'+index}>{obj.short_name}</dd>
                             </a>)
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