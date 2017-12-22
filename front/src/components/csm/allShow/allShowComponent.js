/* 
* @Author: sherah
* @Date:   2017-12-20 20:41:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-21 12:10:16
*/
import React from 'react';
import {connect} from 'react-redux'
import {Icon} from 'antd';
import * as allShowActions from '../../datagrid/datagridAction.js'
class AllShowComponent extends React.Component{
    componentDidMount(){
        var url=this.props.routes[0].childRoutes[0].myParmas.url;
        var type=this.props.routes[0].childRoutes[0].myParmas.type;
        this.props.getData(url,{type:type});
    }
    render(){
        return (
            <div className="allshow">
                <div><p>{this.props.routes[0].childRoutes[0].myParmas.type}<span>全部<Icon type="right" /></span></p></div>
                <div>
                    <dl>
                        <a>
                        <dt><img src="./src/assets/images/qi.png" alt="" />
                        </dt>
                        <dd>奇异果</dd>
                        </a>
                    </dl>
                </div>
            </div>
            )
    }
}
const mapToState=function(state){
    console.log(state)
    return {
        dataset:state.datagrid.response
    }
}
import './allShow.scss'
export default connect(mapToState,allShowActions)(AllShowComponent)
