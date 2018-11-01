import Vue from 'vue'
import loadingPage from './loading'
let MessageConstructor = Vue.extend(loadingPage)
let instance
const Loading = function (options) {
  instance = new MessageConstructor({data: options})
  document.body.appendChild(instance.$mount().$el)
  // instance.id="id123";
  // instance.vm = instance.$mount("#app");
  // document.body.appendChild(instance.vm.$el);
  // instance.vm.visible = true;
  // instance.dom = instance.vm.$el;
  return instance
};
['success', 'warning', 'info', 'error'].forEach(type => {
  Loading[type] = options => {
    if (typeof options === 'string') {
      options = {
        loading: options
      }
    }
    options.type = type
    return Loading(options)
  }
})
// Loading.close=function(){

// }
// Loading.closeAll=function(){

// }
export default Loading
