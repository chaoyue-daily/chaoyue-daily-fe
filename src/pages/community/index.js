import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { login } from '../../store/actions/user'
//Import custom components,style
import img from '../../assets/header.jpg'
import ItemList from './components/itemList'
import shareHoc from '../../hoc/shareHoc';
import { getArticle } from '../../api/api';
import './index.scss'

@shareHoc()

class Index extends Component {
    config = {
    navigationBarTitleText: '社区页'
  }
  constructor () {
    super(...arguments)
    this.state = {
      currentTab: 0,
      tabs: [{name:"daily",cName:"日报"}, 
      {name:"activity",cName:"打投"},
      {name:"contribute",cName:"投稿"}],
      items:[],
      scrollTop: 0,

    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { 
    getArticle().then((response) => {
      this.setState({items:response.data.map(x=>{x.category = x.type == 1001 ? "超越个人动态" :  "其他相关资讯";return x;})});
    });
  }

  componentDidHide () { }

  backToHome = (e) => {
    Taro.redirectTo({
      url: '/pages/home/index'
  })
  }
  switchTab(index) {
    this.setState({
      currentTab: index,
      items: this.state.items.map(x=>{x.title = x.title.replace("Item",index + "Item"); return x;}),
      scrollTop: 0 //When switch tab,goto the top
    })
  }
  render () {
    const { currentTab, tabs, items, scrollTop } = this.state;

    return (
      <View className='community'>
        <View className='header' onClick={this.backToHome}>   
             {/* Judge whether under h5 enviroment */}
             { window ? <Image className='headerImg' mode="widthFix" src={img}/> :  <Image className='headerImg' mode="widthFix" src={'../../assets/header.jpg'}/>}      
        </View  >
        <ScrollView className='scrollview'
            scrollY
            scrollTop={scrollTop}
            style='height: 500px;'
            scrollWithAnimation>
           <ItemList category={tabs[currentTab].name} items={items}/>
        </ScrollView> 
        <View className='footer flex-wrp flex-tab' >
            {
              tabs.map((tab,index) => {
                return (<View className={currentTab === index ? 'flex-item active' : 'flex-item' } key={index} onClick={this.switchTab.bind(this,index)}>
                  {tab.cName}
                </View>)
              })
            }
        </View>
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

