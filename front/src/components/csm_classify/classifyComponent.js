import React from 'react'
import {connect} from 'react-redux'

class ClassifyComponent extends React.Component{
    render(){
        return (
                <div id="classify_container">
                    <div className="classify_top"></div>
                    <div className="classify_content">
                        <div className="left">
                         </div>
                        <div className="right">right</div>
                    </div>
                    
                </div>
            )
    }
}
import './classify.scss'
export default ClassifyComponent