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
