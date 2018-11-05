<template>
  <i
    :class="['kk-icon',src ? '' : `iconfont icon-${icon}`]"
    @click="handleClick" 
    :style="{
      width:`${size}px`,
      height: `${size}px`,
      color,
      fontSize: `${size}px`,
      backgroundImage: src ? `url(${src})` : ''
    }"
  >
  </i>
</template>

<script>
export default {
  name: 'Kk-Icon',
  data () {
    return {
    }
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: 'transparent'
    }
  },
  mounted () {
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style scoped lang="less">
  .kk-icon{
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    vertical-align: middle;
    display: inline-block;
  }
</style>
