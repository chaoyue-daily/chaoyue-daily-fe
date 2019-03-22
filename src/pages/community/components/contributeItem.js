import Taro, { Component } from '@tarojs/taro'
import { View,Image,Icon } from '@tarojs/components'
import img from '../../../assets/home.jpg'

import './contributeItem.scss'

class ContributeItem extends Component {
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
            <View className='contributeItem' onClick={this.goToDetail}>           
                     <View className='title-row'>
                        <View className='title-simple'>{item.title}</View>
                        {/* <View className='title-detail'>{item.title}</View> */}
                     </View>
                     <View className='thumbnail-row'>
                        { window ? <Image className='thumbnail' mode='widthFix' src={img} /> :  <Image className='thumbnail' mode='widthFix' src={'../../../assets/home.jpg'}/>}   
                    </View>
                    <View className='info-row'>
                        <View className='info'>文/超越日报（知乎）</View>
                        <View className='func-button'>点赞</View>
                    </View>
            </View  >
        )
    }
}

export default ContributeItem
