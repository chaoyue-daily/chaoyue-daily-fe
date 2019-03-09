import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import NewsItem from './newsItem'
import ActivityItem from './activityItem'
import ControbuteItem from './controbuteItem'

class ItemList extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const { category, items } = this.props;

        if(category === "daily"){
            return (
                <View>{category}{items.map((item, key) => {return <NewsItem item={item} key={item.id}/>})}</View>
            )
        }
        else if(category === "activity"){
            return (
                <View>{category}{items.map((item, key) => {return <ActivityItem item={item} key={item.id}/>})}</View>
            )
        }
        else if(category === "controbute"){
            return (
                <View>{category}{items.map((item, key) => {return <ControbuteItem item={item} key={item.id}/>})}</View>
            )
        }
    }
}

export default ItemList
