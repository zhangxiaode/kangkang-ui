import Vue from 'vue'
import MessagePage from './message'
let MessageConstructor = Vue.extend(MessagePage)
let instance
const Message = (options) => {
  instance = new MessageConstructor({data: options})
  document.body.appendChild(instance.$mount().$el)
  return instance
}
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
export default Message
