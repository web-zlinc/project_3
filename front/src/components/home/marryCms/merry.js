import React from 'react'

import BackTop from '../../commonComponent/backTop'
import HGoBack from '../../commonComponent/goBack'

class Merry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _this: this,
           _Marry: [
               './src/assets/images/MerryChristmas/M1.jpg',
               './src/assets/images/MerryChristmas/M2.jpg',
               './src/assets/images/MerryChristmas/M3.jpg',
               './src/assets/images/MerryChristmas/M4.jpg',
               './src/assets/images/MerryChristmas/M4.jpg',
               './src/assets/images/MerryChristmas/M4.jpg',
               './src/assets/images/MerryChristmas/M4.jpg',
               './src/assets/images/MerryChristmas/M6.jpg',
               './src/assets/images/MerryChristmas/M8.jpg'
           ]
        }
    }
    render(){
        return (
            <div>
                <HGoBack />
                <div className="cms-module cms-transparent-bg">
                    {
                        (function(self){
                            return self.state._Marry.map(function(item,idx){
                                return <a key={idx}>
                                    <img src={item} />
                                </a>
                            })
                        })(this.state._this)
                    }
                </div>
                <BackTop />
            </div>
        )
    }
}

export default Merry;