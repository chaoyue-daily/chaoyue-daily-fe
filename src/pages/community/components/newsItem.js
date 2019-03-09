import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './newsItem.scss'

class NewsItem extends Component {
    constructor (props) {
        super(props)
    }
    goToDetail = (e) => {
        const { item } = this.props;

        Taro.navigateTo({
            url: '/pages/community/detail?id=' + item.id
        })
    }
    render() {
        const { item } = this.props;

        return (
            <View className='newsItem' onClick={this.goToDetail}>           
                {item.title}
            </View  >
        )
    }
}

export default NewsItem
