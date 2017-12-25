import React from 'react';
import { Link } from 'react-router';

// 此组件未完善，勿用

class Dialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dialogState: 'none'
        }
    }
    judgeL(e){
        this.props.change(e.target.value);
        console.log(this)
    }
    render(){
        return (
            <div>
                <div className="dialog" id="fruitday-panel" style={{display: this.state.dialogState}}>
                    <div className="dialog-content" style={{marginTop:-75,top:'50%'}}>
                        <div className="panel-content" style={{maxHeight: 690}}>
                            <div className="panel-cell">
                                <div className="panel-text text-c">
                                    您还没有登录，登录可以解锁更多功能哦~
                                </div>
                            </div>
                        </div>
                        <div className="panel-buttons">
                            <div className="options">
                                <a className="btn btn-default" onClick={this.closeDiv.bind(this)}>我就不</a>
                                <Link to="/login" className="btn btn-primary">
                                    去登陆
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Dialog;