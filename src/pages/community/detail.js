import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Detail extends Component {

  constructor (props) {
    super(props)
  }
  backtoCommunity = (e) => {
    Taro.navigateBack(2)
  }
  render() {
    return (
      <View >
           {/* Judge whether under h5 enviroment */}
           { window && <View onClick={this.backtoCommunity}>Back</View>}
           <View>Item {this.$router.params.id}</View>
      </View  >
    )
  }
}

export default Detail
