<template>
  <transition name="kk-fade">
    <div v-show="showMessage" :class="['kk-message',type ? `kk-message-${ type }`:'kk-message-info']">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'kk-message',
  data () {
    return {
      message: '',
      type: 'info',
      duration: 3000,
      showMessage: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.showMessage = false
      setTimeout(() => {
        this.$el.parentNode.removeChild(this.$el)
      }, 500)
    }, this.duration)
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.kk-message{
    position:fixed;top:20px;left:50%;z-index:9999;top:20px;
    border:solid 1px transparent;border-radius:5px;
    padding:10px 20px 10px 40px;
}
.kk-message-info{
    background:#DCE3FF url("../../assets/kk-info.png") no-repeat left 5px center;background-size:25px 25px;border-color:#C2C7E0;
    box-shadow:0 0 5px 2px #C2C7E0;
}
.kk-message-warning{
    background:#FFFBCC url("../../assets/kk-warning.png") no-repeat left 5px center;background-size:25px 25px;border-color:#D9D99B;
    box-shadow:0 0 5px 2px #D9D99B;
}
.kk-message-success{
    background:#D5FFCF url("../../assets/kk-success.png") no-repeat left 5px center;background-size:25px 25px;border-color:#B5D4B1;
    box-shadow:0 0 5px 2px #B5D4B1;
}
.kk-message-error{
    background:#FFCFCF url("../../assets/kk-error.png") no-repeat left 5px center;background-size:25px 25px;border-color:#CCA7A5;
    box-shadow:0 0 5px 2px #CCA7A5;
}
.kk-fade-enter-active, .kk-fade-leave-active {
    transition: all .5s;
}
.kk-fade-enter, .kk-fade-leave-to {
    opacity: 0;
    transform: translateY(-100px);
}
</style>

