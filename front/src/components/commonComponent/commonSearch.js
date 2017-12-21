import React from 'react'
import { Input, Button, Icon, Layout, Row, Col } from 'antd';
const { Header, Content } = Layout;
const Search = Input.Search;
const ButtonGroup = Button.Group;

import '../../assets/css/commonSearch.css'

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFruit: '',
        };
    }
    emitEmpty() {
        this.searchFruitInput.focus();
        this.setState({ searchFruit: '' });
    }
    onChangesearchFruit(e) {
        this.setState({ searchFruit: e.target.value });
    }
    render() {
        const { searchFruit } = this.state;
        const suffix = searchFruit ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this)} /> : null;
        return (
            <div>
                <Layout id="commonSearch">
                    <Header id="searchNav" style={{ background: '#fff' }}>
                        <div className="navbar-header">
                            <Icon type="right" />
                            <span>返回</span>
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

