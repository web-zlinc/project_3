import React from 'react';


// import './main.scss'; //引入主模板样式  

export default class MainComponent extends React.Component{
    render(){
        return (
            <div id="main">
                {this.props.children}
            </div>
        )
    }
}