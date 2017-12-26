import React, {Component} from 'react'
import './spinner.scss'

export default class Spinner extends Component{
    render(){
        if(!this.props.show){
            return null
        }        
        return (
            <div>
                <div className="Ed-spinner-mask"></div>
                <div className="Ed-spinner Ed-spinner-three-bounce">
                    <div className="Ed-bounce1"></div>
                    <div className="Ed-bounce2"></div>
                    <div className="Ed-bounce3"></div>                 
                </div>
            </div>
        )
    }
}