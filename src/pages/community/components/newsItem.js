import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import img1 from '../../../assets/1001.png'
import img2 from '../../../assets/1002.png'
import img3 from '../../../assets/1003.png'

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

        let img = item.type == 1001 ? img1 : ( item.type == 1002 ? img2 : img3);
        return (
            <View className='newsItem' onClick={this.goToDetail}>
                <View className='thumbnail-col'>
                    { window ? <Image className='thumbnail' mode='widthFix' src={img} /> :  <Image className='thumbnail' mode='widthFix' src={'../../../assets/thumbnail.jpg'}/>}   
                </View>
                <View className='title-col'>
                     <View className='title-text'>
                        <View className='title-simple'>{item.title}</View>
                     </View>
                     <View className='category'>{item.category}</View>
                </View>
            </View  >
        )
    }
}

export default NewsItem
