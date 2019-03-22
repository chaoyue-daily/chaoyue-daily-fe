import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { login } from '../../store/actions/user'
//Import custom components,style
import img from '../../assets/home.jpg'
import ItemList from './components/itemList'
import shareHoc from '../../hoc/shareHoc';
import { getNews,getActivities,getContributes } from '../../api/api';
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
    this.getData();
  }

  componentDidHide () { }

  getData(index){
     const { currentTab } = this.state;

     let tab = index != undefined ? index : currentTab;
     let request = tab == 0 ? getNews :(tab == 1 ? getActivities : getContributes);
     request().then((response) => {
       if(index != undefined){
        this.setState({
          currentTab: index,
          items:response.data.map(x=>{x.category = x.type == 1001 ? "超越个人动态" :  (x.type == 1002 ? "其他相关资讯" : "月芽村故事");return x;}),
          scrollTop: 0 //When switch tab,goto the top
        })
       }
       else{
        this.setState({items:response.data.map(x=>{x.category = x.type == 1001 ? "超越个人动态" :  (x.type == 1002 ? "其他相关资讯" : "月芽村故事");return x;})});
       }  
    });
  }

  backToHome = (e) => {
    Taro.redirectTo({
      url: '/pages/home/index'
  })
  }
  switchTab(index) {
    this.getData(index);
  }
  render () {
    const { currentTab, tabs, items, scrollTop } = this.state;

    return (
      <View className='community'>
        <View className='header' onClick={this.backToHome}>   
             {/* Judge whether under h5 enviroment */}
             { window ? <Image className='headerImg' mode="widthFix" src={img}/> :  <Image className='headerImg' mode="widthFix" src={'../../assets/home.jpg'}/>}      
        </View  >
        <ScrollView className='scrollview'
            scrollY
            scrollTop={scrollTop}
            style='height: 550px;'
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

