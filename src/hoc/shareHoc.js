import Taro from '@tarojs/taro';
import { connect } from '@tarojs/redux';

function shareHoc(opts = {}) {
  
  // 设置默认
  const defalutPath = 'pages/index/index?';
  const defalutTitle = 'Chaoyue Daily';

  return function demoComponent(Component) {      
    // redux里面的用户数据
    @connect(({ user }) => ({
        user
    }))
    class ShareHoc extends Component {
      async componentWillMount() {
        
        if(!window){
          wx.showShareMenu({
            withShareTicket: true
          });
        }

        if (super.componentWillMount) {
          super.componentWillMount();
        }
      }

      // 点击分享的那一刻会进行调用
      onShareAppMessage() {
        let { title, path = null } = opts;
		
        // 从继承的组件获取配置
        if (this.$setSharePath && typeof this.$setSharePath === 'function') {
          path = this.$setSharePath();
        }
		
        // 从继承的组件获取配置
        if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
          title = this.$setShareTitle();
        }

        if (!path) {
          path = defalutPath;
        }
		
        // 每条分享都补充用户的分享id
        // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
        const sharePath = `${path}`; 

        return {
          title: title || defalutTitle,
          path: sharePath
        };
      }

      render() {
        return super.render();
      }
    }

    return ShareHoc;
  };
}

export default shareHoc;

