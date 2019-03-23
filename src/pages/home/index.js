import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { login } from '../../store/actions/user'
//Import custom components,style
import Card from './card';
import shareHoc from '../../hoc/shareHoc';
import { getSlogan } from '../../api/api';
import { getMonth } from '../../utilty/helper';
import './index.scss'

@shareHoc()

class Index extends Component {
    config = {
    navigationBarTitleText: '首页'
  }
  constructor () {
    super(...arguments)
    this.state = {
      items:[],
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { 
    getSlogan().then((response) => {
      this.setState({items:response.data});
    });
  }

  componentDidHide () { }
 
  render () {
    const { items } = this.state;
    let date = new Date();
    return (
      <View className='home'>
          <View><Text className='home-day'>{date.getDate()}</Text><Text className='home-date'>{getMonth(date.getMonth())}.{date.getFullYear()}</Text></View>
          <Swiper
            className='swiper'
            vertical={false}
            circular={true}>
            {items.map((item, key) => {return  <SwiperItem className='swiperItem'>
              <Card item={item}></Card>
            </SwiperItem>})}
          </Swiper>
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

