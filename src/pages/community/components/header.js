import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image  } from '@tarojs/components'

import './header.scss'

class Header extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const { date, imgSrc, backToHome } = this.props;

        return (
            <View onClick={backToHome}>  
                <Text>{date}</Text>         
                <Image
                    className='headerImg'
                    src={imgSrc}/>
            </View  >
        )
    }
}

export default Header
