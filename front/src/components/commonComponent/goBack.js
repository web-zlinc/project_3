import React from 'react';
import { IndexLink } from "react-router";
import { Icon } from 'antd';

import '../../assets/css/goBack.css'

class HGoBack extends React.Component {
    HgoBack(){
        console.log(this)
        // this.props.router.goBack();
    }
    render(){
        return (
            <div>
                <div id="H_GoBack" onClick={this.HgoBack.bind(this)}>
                    <span>
                        <a href="#/">
                            <Icon type="left-circle-o" />
                        </a>
                    </span>
                </div>
            </div>
        )
    }
}

export default HGoBack;