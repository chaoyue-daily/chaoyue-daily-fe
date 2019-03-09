import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { login } from '../../store/actions/user'
//Import custom components,style
import Header from './components/header'
import ItemList from './components/itemList'
import Tab from './components/tab'
import './index.scss'

class Index extends Component {
    config = {
    navigationBarTitleText: '社区页'
  }
  constructor (props) {
    super(props)
    this.state = {
      currentTab: 0,
      tabs: [{name:"daily",cName:"日报"}, 
      {name:"activity",cName:"打投"},
      {name:"controbute",cName:"投稿"}],
    }
    this.backToHome = this.backToHome.bind(this);
    this.switchTab = this.switchTab.bind(this);
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  backToHome = (e) => {
    Taro.navigateTo({
      url: '/pages/home/index'
  })
  }
  switchTab(index) {
    this.setState({
      currentTab: index
    })
  }
  render () {
    const { currentTab, tabs } = this.state;

    return (
      <View className='community'>
        <Header date={"03/09/2019"} imgSrc={""} backToHome={this.backToHome}/>
        <ScrollView className='scrollview'
            scrollY
            style='height: 500px;'
            scrollWithAnimation>
           <ItemList category={tabs[currentTab].name} items={[{id:1,title:"Item1"},{id:2,title:"Item2"},{id:3,title:"Item3"},{id:4,title:"Item4"},{id:5,title:"Item6"},{id:6,title:"Item6"}]}/>
        </ScrollView> 
        <Tab tabs={tabs.map(x=>{return x.cName})} currentTab={currentTab} switchTab={this.switchTab}/>
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

