import React from 'react'

class WechatGift extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _weGifts: [
                './src/assets/images/wechatGifts/1fc.png',
                './src/assets/images/wechatGifts/2sc.png',
                './src/assets/images/wechatGifts/3rd.png',
                './src/assets/images/wechatGifts/4th.png',
                './src/assets/images/wechatGifts/5th.png',
                './src/assets/images/wechatGifts/6th.png',
                './src/assets/images/wechatGifts/7th.png'
            ],
            _this: this
        }
    };
    componentDidMount() {

    }
    render() {
        return (
            <div>
                {
                    (function(self){
                        // console.log(self)
                        return self.state._weGifts.map(function(item,idx){
                            // console.log(item)
                            return <a key={idx}>
                                    <img src={item} />
                                </a>
                        })
                    })(this.state._this)
                }
            </div>
        )
    }
}

export default WechatGift;