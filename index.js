import Icon from './packages/icon/index'
import Button from './packages/button/index'
import Message from './packages/message/index'
import Dialog from './packages/dialog/index'
import Pagination from './packages/pagination/index'
import Slider from './packages/slider/index'
import Scroll from './packages/scroll/index'
import Loading from './packages/loading/index'
import './common.less'

const components = [
  Icon,
  Button,
  Message,
  Dialog,
  Pagination,
  Slider,
  Scroll
]
const install = (Vue, opts = {}) => {
  // 1. 添加全局方法或属性
  // Vue.myGlobalMethod = function () {
  //   console.log("添加全局方法或属性");
  // }

  // 2. 添加全局资源
  // Vue.directive('my-directive', {
  //   bind (el, binding, vnode, oldVnode) {
  //     console.log("添加全局资源");
  //   }
  // })

  // 3. 注入组件
  // Vue.mixin({
  //   created: function () {
  //     console.log("注入组件");
  //   }
  // })

  // 4. 添加实例方法
  Vue.prototype.$message = Message
  Vue.prototype.$loading = Loading

  // 组件注册
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */

export default {
  install,
  Icon,
  Button,
  Message,
  Dialog,
  Pagination,
  Loading,
  Slider,
  Scroll
}
