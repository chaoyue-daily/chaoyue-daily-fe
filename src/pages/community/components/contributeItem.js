import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
import img from '../../../assets/contribute.png'
import voteImg from '../../../assets/vote.svg'

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
                        { window ? <Image className='thumbnail' mode='widthFix' src={img} /> :  <Image className='thumbnail' mode='widthFix' src={'../../../assets/contribute.jpg'}/>}   
                    </View>
                    <View className='info-row'>
                        <View className='info'>文/超越日报</View>
                        <View className='vote-btn'><View className="vote-count">6666</View></View>
                        <View className='vote-btn'><Image src={voteImg}/></View>
                    </View>
            </View  >
        )
    }
}

export default ContributeItem
