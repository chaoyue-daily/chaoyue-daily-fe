import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './contributeItem.scss'

class ContributeItem extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const { item } = this.props;

        return (
            <View className='contributeItem'>           
                {item.title}
            </View  >
        )
    }
}

export default ContributeItem
