import React from 'react';
import { Icon } from 'antd';

import './main.scss'; //引入主模板样式  

export default class MainComponent extends React.Component{
    render() {
        return (
            <div id="main">
                <header className="headerMain" >
                    <h1 className="imgContainer" ><a href="#/">FuritExpress</a></h1>
                    <dl className="userInfo">
                        <dd><a href="#/"><img src="./src/assets/imgs/headerPeng.jpg" /></a></dd>
                        <dd><a href="#/">Administrator</a></dd>
                        <dd>
                            <a href="#/"><Icon type="setting" /></a>
                            <ul>
                                <li>
                                    <a href="#/"><Icon type="poweroff" /><span>退出</span></a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </header>
                <main className="mainContent">
                    <aside className="mainAside" >
                        <ul>
                            <li><Icon type="user" className="itemAnticon" /><a href="#/">我是列表项</a></li>
                            <li><Icon type="file" className="itemAnticon" /><a href="#/" className="activeAside" >我是列表项</a></li>
                            <li><Icon type="book" className="itemAnticon" /><a href="#/">我是列表项</a></li>
                        </ul>
                    </aside>
                    <div className="content">{this.props.children}</div>
                </main>
            </div>
        )
    }
}