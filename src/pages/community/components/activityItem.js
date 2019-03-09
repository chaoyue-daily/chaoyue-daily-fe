import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './activityItem.scss'

class ActivityItem extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const { item } = this.props;

        return (
            <View className='activityItem'>           
                {item.title}
            </View  >
        )
    }
}

export default ActivityItem
