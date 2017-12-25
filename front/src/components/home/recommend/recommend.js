import React from 'react'
// import { connect } from "react-redux";

// import * as searchActions from './recommendAction'


class RecommendFruit extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         api: 'HsearchForRecommend.php'
    //     }


    // }
    componentDidMount(){
        // let ajaxUrl = this.state.api;
        // this.props.getData(ajaxUrl);
        // var resData = this.props;
        // console.log(resData)
        console.log(this)
    }  
    render(){
        return (
            <div>
                <div>
                    <div className="section space">
                        <a className="title">
                            <h2>
                                人气推荐
                            </h2>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapToState = function(state){
//     return {
//         dataset: state.searchRecommend.response
//     }
// }

export default RecommendFruit;