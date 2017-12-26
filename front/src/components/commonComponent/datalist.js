/* 
* @Author: sherah
* @Date:   2017-12-22 17:15:14
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-26 11:59:52
*/
import React from 'react'
import {Icon} from 'antd';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as datalistAction from '../csm/commonDetails/detailsAction.js'
import Spinner from '../spinner/spinnerComponent.js'
class Datalist extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            show: false,
            totalQty:0,
            datas:""
        };
    }
     // componentWillMount(){
     //    this.setState({
     //        datas:this.props.datas
     //    })

     // }
    addCart(event){
        var tag=event.target.tagName.toLowerCase();
        if(tag=="i" && window.localStorage.data){     
            var gid=event.target.parentNode.className;        
            var arr=JSON.parse(window.localStorage.data);
            var phone=arr[0].phone;
            this.setState({datas:this.props.datas});
             this.setState({show:true});
             this.props.addCart("datalist.php",{gid:gid,phone:phone});
                 this.setState({show:false});
                 if(this.props.cart=="true"){
                    alert('保存成功！');
                 }         
        }
        else if(!window.localStorage.data){
            // console.log(window.localStorage.data)
            alert('请先登录！');
        }     
        event.preventDefault(); 
    }
        render(){
            // console.log(this.state.datas)
        if(!this.props.datas){
            return null
        }
        return (
            <ul className="list">
            <Spinner show={this.state.show}></Spinner>
            {
                this.props.datas.map(function(item,index){
                    return (
                        <li key={index} >
                        <Link to={"/classify_list/details/"+item.gid} >
                        <img src={item.images}/>
                        </Link>
                        <div className="list_right">
                        <div className="r_top">
                            <p className="name">{item.name}
                            </p>
                            <p className="details">
                               {item.details}
                            </p>
                        </div>
                        
                        <p className="inventory">{item.standard}</p>
                        <div className="price">
                        <p>￥<span>{item.price}</span><span>明日达</span></p>
                        <p className={item.gid} onClick={this.addCart.bind(this)}><Icon type="plus-circle-o" /></p>
                        </div>
                       </div>

                    
                    </li>
                        )
                }.bind(this))
            }
               
            </ul>
            )
    }
}
const mapToState=function(state){
    return {
       cart:state.details.response
    }
}
import './datalist.scss'
export default connect(mapToState,datalistAction)(Datalist)