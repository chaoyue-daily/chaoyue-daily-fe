import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { login } from '../../store/actions/user'
//Import custom components,style
import Card from './card';
import shareHoc from '../../hoc/shareHoc';
import './index.scss'

@shareHoc()

class Index extends Component {
    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
 
  render () {
    return (
      <View className='home'>
          <View><Text className="home-day">09</Text><Text className="home-date">Mar.2019</Text></View>
          <Card/>
      </View>
    )
  }
}

export default connect (({ user }) => ({
  user
}), (dispatch) => ({
  login (user) {
    dispatch(login(user))
  }
}))(Index)

