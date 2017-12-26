import React from 'react';
import { Link } from 'react-router';
import { Icon } from 'antd';

class RecommendFruit extends React.Component {
    constructor() {
        super();
        this.state = {
            className: 'hidden',
            dialogState: 'none'
        }
    }
    // 判断登录状态
    judgeLogin() {
        // console.log(window.localStorage.data)
        let loginState = window.localStorage.data;
        // console.log(loginState)
        if (loginState != undefined && loginState != '[]') {
            console.log('添加成功')
        } else {
            this.setState({ dialogState: 'block' })
            console.log('您未登录')
        }
    };
    closeDiv() {
        this.setState({ dialogState: 'none' })
    }
  
    render(){
        return (
            <div>
                <div className="section space hotSale">
                    <a className="title">
                        <h2>
                            人气推荐
                        </h2>
                    </a>
                </div>
                <div className="section recommends">
                    <div className="list recommends-list">
                        {
                            (function(self){
                                if(self.props.red){
                                    return self.props.red.map(function(item,idx){
                                        return <a className="item" href={'#/classify_list/details/' + item.gid }  key={idx}>
                                            <div className="img-box">
                                                <img src={item.images} />
                                            </div>
                                            <div className="desc">
                                                <h5>{item.name}</h5>
                                                <p>{item.details}</p>
                                                <div className="price">
                                                    <span className="money">
                                                        ￥{item.price}
                                                        <em> / {item.standard}</em>
                                                    </span>
                                                    <span onClick={self.judgeLogin.bind(self)}>
                                                        <Icon>

                                                        </Icon>
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    })
                                }
                            })(this)
                        }
                    </div>
                </div>
                <div className="dialog" id="fruitday-panel" style={{ display: this.state.dialogState }}>
                    <div className="dialog-content" style={{ marginTop: -75, top: '50%' }}>
                        <div className="panel-content" style={{ maxHeight: 690 }}>
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
                <div className="section space hotSale" style={{paddingBottom: 100}} />
            </div>
        )
    }
}

export default RecommendFruit;