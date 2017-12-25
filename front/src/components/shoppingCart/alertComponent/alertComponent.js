import React from 'react'
import {hashHistory} from 'react-router'

import {Input, Icon} from 'antd'
const Search = Input.Search
import './alert.scss'
class AlertComponent extends React.Component {
    render(){
        if(!this.props.isAlert){
            return null
        }
        return (
            <div className="alertMess">{this.props.mess}</div>
        )
    }
}
export default AlertComponent