import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import WxParse from './wxParse/wxParse'

import './wxParse.scss'

/**
 * 需要注意的是，在项目的 config/index.js 文件中，有 copy 模板与样式的操作
 */
export default class ParseComponent extends Component {
  componentDidMount () {
    const article = this.props.data
    WxParse.wxParse('article', 'html', article, this.$scope, 5)
  }

  render () {
    return (
      <View>
        <import src='./wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
      </View>
    )
  }
}