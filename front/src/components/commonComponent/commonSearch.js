import React from 'react'
import { connect } from 'react-redux'

import { Input, Button, Icon, Layout, Row, Col } from 'antd';
import { IndexLink } from "react-router";
const { Header, Content } = Layout;
const Search = Input.Search;
const ButtonGroup = Button.Group;

import * as searchFruitActions from './searchAction'


import '../../assets/css/commonSearch.css'


class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: 'Hsearch.php',
            searchFruit: '',
            lastPath: ''
        };
    }
    componentDidMount() {
        // this.setState({_currentUrl: this.props.location.pathname})

        // 获取进入此处之前的路由
        // let _pathArr = this.props.location.state;
        // let len = _pathArr.length - 1;
        // console.log(_pathArr[len])
        // 这里是一个异步请求，下面的console.log打印的结果会导致为空，而到render()时则能正确获取数据
        // this.setState({lastPath: _pathArr[len]});
        // console.log(this.state)
    }
    componentWillUpdate(newProps, newState) {
        // let keyWord = this.state.searchFruit;
        // let api = this.state.api;

        // this.timer = setTimeout(function(){

        //     this.props.getData(api, { keyword: keyWord });

        // }.bind(this),1000)
        
        // console.log(this.props.dataset)

        return true;
    }
    back(){
        this.props.router.goBack()
    }
    emitEmpty() {
        this.searchFruitInput.focus();
        this.setState({ searchFruit: '' });
    }
    onChangesearchFruit(e) {
        this.setState({ searchFruit: e.target.value });
        let keyWord = this.state.searchFruit;
        let api = this.state.api;
        
        // this.timer = setTimeout(function () {

            this.props.getData(api, { keyword: keyWord });

            var resData = this.props.dataset;

            // console.log(resData.length)

            if(resData.length === 0) {
                
                return ;
            }else{
                console.log(resData)
                
            }
        // }.bind(this), 3000)
    }
    render() {
        const { searchFruit } = this.state;
        // const path = this.state.lastPath;
        const suffix = searchFruit ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this)} /> : null;
        return (
            <div>

                <Layout id="commonSearch">
                    <Header id="searchNav" style={{ background: '#fff' }}>
                        <div className="navbar-header">
                            <Icon type="right" />
                            <IndexLink style={{ color: 'green' }} onClick={this.back.bind(this)}>返回</IndexLink>
                        </div>
                        <Input
                            id="searchInput"
                            placeholder="新鲜水果来一波"
                            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={suffix}
                            value={searchFruit}
                            onChange={this.onChangesearchFruit.bind(this)}
                            ref={node => this.searchFruitInput = node}
                        />
                        <div className="sub-btn">
                            <span>
                            搜索
                            </span>
                        </div>
                    </Header>
                    <Content id="keyword" style={{ padding: '20px 50px' }} >
                        <div className="title">热门搜索：</div>
                        <div className="con">  
                            <a>橙</a>  
                            <a>提子</a>  
                            <a>樱桃</a>  
                            <a>苹果</a>  
                            <a>火龙果</a>  
                            <a>瓜</a>  
                            <a>羊蝎子</a>  
                            <a>雪花鲳</a>  
                            <a>奇异果</a>  
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}

const mapToState = function (state) {
    return {
        dataset: state.searchFruit.response
    }
}

export default connect(mapToState, searchFruitActions)(SearchComponent)