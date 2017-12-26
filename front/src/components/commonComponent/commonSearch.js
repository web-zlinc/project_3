import React from 'react'
import { connect } from 'react-redux'

import { Input, Button, Icon, Layout, Row, Col, AutoComplete } from 'antd';
import { IndexLink, Link } from "react-router";
const { Header, Content } = Layout;
const Search = Input.Search;
const ButtonGroup = Button.Group;

import * as searchFruitActions from './searchAction'

import '../../assets/css/commonSearch.css'


const dataSource = ['奇异果', '牛油果', '热带水果', '樱桃', '葡萄/提子', '柑橙桔柚'];


class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: 'Hsearch.php',
            searchFruit: '',
            lastPath: '',
            historySearch: [],
            historyClass: 'title forHidden'
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
    }
    searchForList(){
        console.log(this.state.searchFruit)
        let keyWord = this.state.searchFruit;
        let api = this.state.api;

        this.props.getData(api, { keyword: keyWord });

        var resData = this.props.dataset;
        // 异步请求 返回undefind
        console.log(resData)

        // 记录历史搜索
        this.state.historySearch.push(keyWord);
        // console.log(this.state.historySearch)

    }
    render() {
        const { searchFruit } = this.state;
        let self = this;
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
                            <span onClick={this.searchForList.bind(this)}>
                                <Link to={'/classify/classify_list/' + this.state.searchFruit}>搜索</Link>
                            </span>
                        </div>
                    </Header>
                    <Content id="keyword" style={{ padding: '20px 50px' }} >
                        <div className="title">历史搜索：</div>
                        <div className="con">
                            {
                                (function(self){
                                    if(self.state.historySearch){
                                        return self.state.historySearch.map(function(item,idx){
                                            return <a key={idx}>{item}</a>
                                        })
                                    }
                                })(this)
                            }
                        </div>
                        <div className="title" style={{ marginTop: 100 }}>热门搜索：</div>
                        <div className="con">  
                            <a href="#/classify/classify_list/%E5%A5%87%E5%BC%82%E6%9E%9C">奇异果</a>   
                            <a href="#/classify/classify_list/%E6%A8%B1%E6%A1%83">樱桃</a>  
                            <a href="#/classify/classify_list/%E8%8B%B9%E6%9E%9C">苹果</a>    
                            <a href="#/classify/classify_list/%E7%89%9B%E6%B2%B9%E6%9E%9C">牛油果</a>   
                            <a href="#/classify/classify_list/%E5%A5%87%E5%BC%82%E6%9E%9C">奇异果</a>  
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