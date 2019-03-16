import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import img from '../../../assets/thumbnail.jpg'

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
                <View className='thumbnail-col'>
                    { window ? <Image className='thumbnail' mode='widthFix' src={img} /> :  <Image className='thumbnail' mode='widthFix' src={'../../../assets/thumbnail.jpg'}/>}   
                </View>
                <View className='title-col'>
                     <View className='title-text'>
                        <View className='title-simple'>{item.title}</View>
                        <View className='title-detail'>{item.title}</View>
                     </View>
                     <View className='category'>{item.category}</View>
                </View>
            </View  >
        )
    }
}

export default NewsItem
