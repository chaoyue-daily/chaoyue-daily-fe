import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import "./tab.scss"

export default class Tab extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const { tabs,currentTab,switchTab } = this.props;

        return (
            <View className='bottom-tab flex-wrp flex-tab' >
            {
              tabs.map((tab,index) => {
                return (<View className={currentTab === index ? 'flex-item active' : 'flex-item' } key={index} onClick={()=>switchTab(index)}>
                  {tab}
                </View>)
              })
            }
            </View>
        )
    }
}
