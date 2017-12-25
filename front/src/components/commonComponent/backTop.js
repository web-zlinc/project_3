import React from 'react';
import $ from 'jquery';
import { Icon } from 'antd';

import '../../assets/css/backTop.css'

class BackTop extends React.Component {
    HbackTop(){
        $('body').stop().animate({ scrollTop: 0 }, 400);
    }
    componentDidMount(){
        window.addEventListener('scroll',() => {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(scrollTop < 477){
                $('#H_ToTop').fadeOut();
            }else if (scrollTop > 477){
                $('#H_ToTop').fadeIn();
            }
        })
    }
    render(){
        return (
            <div>
                <div id="H_ToTop"  onClick={this.HbackTop.bind(this)}>
                    <span>
                        <Icon type="up" />      
                    </span>
                </div>
            </div>
        )
    }
}

export default BackTop;