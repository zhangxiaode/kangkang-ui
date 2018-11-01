<template>
  <transition name="zxd-fade">
    <div v-show="showMessage" :class="['zxd-message',type ? `zxd-message-${ type }`:'zxd-message-info']">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Zxd-message',
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
    switch () {

    }
  }
}
</script>
