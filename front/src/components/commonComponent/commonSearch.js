import React from 'react'
import { Input, Button, Icon, Layout, Row, Col } from 'antd';
const { Header, Content } = Layout;
const Search = Input.Search;
const ButtonGroup = Button.Group;

export default class SearchComponent extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ background: '#fff' }}>
                        <ButtonGroup>
                            <Button>
                                <Icon type="left" />返回
                            </Button>
                        </ButtonGroup>
                        <Search
                            placeholder="新鲜水果"
                            onSearch={value => console.log(value)}
                            style={{ width: '83%' }}
                        />
                        <ButtonGroup>
                            <Button>
                                搜索
                            </Button>
                        </ButtonGroup>
                    </Header>
                    <Content style={{ padding: '20px 50px' }} >
                        <p>热门搜索：</p>
                        <Row >
                            <Col span={2}><Button>橙子</Button></Col>
                            <Col span={2}><Button>提子</Button></Col>
                            <Col span={2}><Button>樱桃</Button></Col>
                            <Col span={2}><Button>苹果</Button></Col>
                            <Col span={2}><Button>瓜果</Button></Col>
                        </Row>

                    </Content>
                </Layout>
            </div>
        )
    }
}

