import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import img from '../../assets/home.jpg'

import './card.scss'

class Card extends Component {
    constructor (props) {
        super(props)
    }
    toCommunity(){
        // 跳转到目的页面，打开新页面
        Taro.redirectTo({
          url: '/pages/community/index'
        })
      }
    render() {
        const { item } = this.props;

        return (
            <View className='card' onClick={this.toCommunity}>
                 <Text className="card-headr">我想抓住天上的星星，织成一张渔网
捕捉你心里的烦恼</Text>
                 {/* Judge whether under h5 enviroment */}
                 { window ? <Image mode="widthFix" src={img}/> :  <Image mode="widthFix" src={'../../assets/home.jpg'}/>}    
            </View  >
        )
    }
}

export default Card
