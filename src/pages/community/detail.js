import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ParseComponent from '../../components/wxParseComponent'

class Detail extends Component {

  constructor (props) {
    super(props)
  }
  backtoCommunity = (e) => {
    Taro.navigateBack(2)
  }
  render() {
    let data ="<img src='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D180%2C140%2C50/sign=9a425b2bc1fc1e17fdeadf712cadc73b/6609c93d70cf3bc746d621d1df00baa1cd112a3d.jpg'/>";
    
    return (
      <View >
           {/* Judge whether under h5 enviroment */}
           { window && <View onClick={this.backtoCommunity}>Back</View>}
           <View>Item {this.$router.params.id}</View>
           {process.env.TARO_ENV === 'weapp' ? <ParseComponent data={data}/> : 
           <View dangerouslySetInnerHTML={{ __html: data }} />}
      </View  >
    )
  }
}

export default Detail
