import React, { Component } from 'react';

import './backTop.scss'

class BackTopComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    BackTop(a, b, c) {
        window.onscroll = function () {
            var st = window.scrollY;
            if (st > 2000) {
                a.style.display = 'block';
            } else {
                a.style.display = 'none';
            }
        }
        var timer;
        a.onclick = function () {
            timer = setInterval(function () {
                var st = window.scrollY;
                //设置速度，当滚动条越靠近底部，滚动速度越快，反之越慢
                var speed = st / b;
                var move = st - speed;
                //设置浏览器滚动距离
                var tp = scrollTo(0, move);
                console.log(move)
                if (move < 1) {
                    //当最后距离小于1时，直接设置tp的值并且清楚定时器
                    tp === 0;
                    clearInterval(timer);
                }
            }, c)
        }
    }
    render(){
        return (

            <div>
                <div id="backTop">返回顶部</div>
            </div>
        )
    }
}

export default BackTopComponent;