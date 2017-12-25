import React from 'react'
import { Icon, Affix } from 'antd';
import { Link } from 'react-router'
import { browserHistory } from "react-router";

class TopMenu extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         _currentUrl: '',
    //         _path: []
    //     }
    //     console.log(this.state)
    // }
    // componentDidMount() {
    //     // this.setState({_currentUrl: this.props.location.pathname})
    //     this.state._path.push(this.props.location.pathname)
    //     // console.log(this.props.location.pathname)
    //     // console.log(this.state)
    // }
    render(){
        return (
            <Affix>
                <header className="home-header" style={{ display: 'block' }}>
                    <div className="head">
                        <div className="position">
                            <div id="arri-time">
                                <img src="./src/assets/images/ci_20171025_1.png" />
                            </div>
                        </div>
                        <Link to={{ pathname: 'search' }}>

                            <Icon type="search">

                            </Icon>
                        </Link>
                    </div>
                </header>
            </Affix>
        )
    }
}

export default TopMenu;