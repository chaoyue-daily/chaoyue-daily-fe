import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ParseComponent from '../../components/wxParseComponent'
import { getArticleById } from '../../api/api';

import "./detail.scss"

class Detail extends Component {

  constructor (props) {
    super(props)
    this.state = {
      article:{}
    }
  }
  componentDidShow () { 
    getArticleById(this.$router.params.id).then((response) => {
      this.setState({article:response.data});
    });
  }
  backtoCommunity = (e) => {
    Taro.navigateBack(2)
  }
  render() {
    const { article } = this.state;
    let data = article.content;
    
    return (
      <View className="detail">
           {/* Judge whether under h5 enviroment */}
           {/* { window && <View onClick={this.backtoCommunity}>Back</View>} */}
           {process.env.TARO_ENV === 'weapp' ? <ParseComponent data={data}/> : 
           <View dangerouslySetInnerHTML={{ __html: data }} />}
      </View  >
    )
  }
}

export default Detail
