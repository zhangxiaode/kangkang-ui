import Vue from 'vue'
import MessagePage from './message'
let MessageConstructor = Vue.extend(MessagePage)
let instance
const Message = function (options) {
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
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})
// Message.close=function(){

// }
// Message.closeAll=function(){

// }
export default Message
