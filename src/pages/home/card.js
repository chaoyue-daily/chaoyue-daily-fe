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
                 <Text className="card-headr">{item && item.slogan}</Text>
                 {/* Judge whether under h5 enviroment */}
                 { window ? <Image src={item.image_url}/> :  <Image mode="widthFix" src={'../../assets/home.jpg'}/>}    
            </View  >
        )
    }
}

export default Card
