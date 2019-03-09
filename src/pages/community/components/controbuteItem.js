import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './controbuteItem.scss'

class ControbuteItem extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const { item } = this.props;

        return (
            <View className='controbuteItem'>           
                {item.title}
            </View  >
        )
    }
}

export default ControbuteItem
