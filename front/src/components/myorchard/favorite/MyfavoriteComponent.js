import React from 'react'
import {hashHistory,Link} from 'react-router'
import { Form, Icon, Input, Button } from 'antd'
import {connect} from 'react-redux'
import * as favoriteAction from './favoriteAction';



import './Myfavorite.scss'
import Conent from '../../commonComponent/datalist'

class Myfavorite extends React.Component{
    
    componentWillMount(){
        if(localStorage.data){
            var arr=JSON.parse(localStorage.data);
            this.props.getData('favorite.php',{id:arr[0].uid})
        }
        
    }
    back(){
        this.props.router.goBack()
    }
    render(){console.log(this.props.dataset)
        return (
                <div id="m_container">
                    
                    <div className="mc_top">
                        <Icon type="left" className="fl" onClick={this.back.bind(this)} />
                        <span>我的收藏</span>
                    </div>
                    <div className="mc_main">
                        <Conent datas={this.props.dataset}/>
                    </div>
               
                </div>
            )
    }
}

const mapToState = function(state){ 
    return {
        type:state.login.status,
        dataset: state.login.response
    }
}

export default connect(mapToState, favoriteAction)(Myfavorite);