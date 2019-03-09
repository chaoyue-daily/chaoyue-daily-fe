import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { login } from '../../store/actions/user'
//Import custom components,style
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
  toCommunity(){
    // 跳转到目的页面，打开新页面
    Taro.redirectTo({
      url: '/pages/community/index'
    })
  }
  render () {
    return (
      <View className='home' onClick={this.toCommunity}>
        <View><Text>Hello {this.props.user.loginUser}</Text></View>
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

