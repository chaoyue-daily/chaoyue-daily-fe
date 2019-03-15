import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ParseComponent from '../../components/wxParseComponent'

import "./detail.scss"

class Detail extends Component {

  constructor (props) {
    super(props)
  }
  backtoCommunity = (e) => {
    Taro.navigateBack(2)
  }
  render() {
    let data ="<p></p><h2><b>一、个人动态</b></h2><p>导读：更新广告博一则，见面会福利活动</p><img class='origin_image zh-lightbox-thumb' data-caption='' data-original='https://pic3.zhimg.com/50/v2-824579e70a1248456a55c2228c532989_200x112.jpg' data-rawheight='862' data-rawwidth='1280' data-size='normal' witdth='50%' src='https://pic1.zhimg.com/v2-fa5446843fe10e2dacd805980539bba8_r.jpg'/>";
    
    return (
      <View className="detail">
           {/* Judge whether under h5 enviroment */}
           { window && <View onClick={this.backtoCommunity}>Back</View>}
           {process.env.TARO_ENV === 'weapp' ? <ParseComponent data={data}/> : 
           <View dangerouslySetInnerHTML={{ __html: data }} />}
      </View  >
    )
  }
}

export default Detail
