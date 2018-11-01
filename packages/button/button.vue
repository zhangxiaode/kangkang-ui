<template>
  <button
    :disabled="disabled"
    :class="[
      'zxd-button',
      type ? 'zxd-btn-' + type : '',
      size ? 'zxd-btn-' + size : '',
      {
        'is-disabled':disabled,
        'is-circle':circle
      }
    ]"
    @click="handleClick"
  >
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'Zxd-button',
  data () {
    return {
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    circle: Boolean,
    size: {
      type: String,
      default: 'default'
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
  .zxd-button{
    position: relative;display: inline-block;height: 32px;line-height: 1;padding: 0 15px;
    text-align: center;white-space: nowrap;font-size: 14px;color: rgba(0,0,0,.65);
    border: 1px solid #d9d9d9;border-radius: 4px;background: none;outline:none;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    cursor: pointer;
    margin:0;
    &:hover,&:focus{
      background-color: #fff;border-color: #40a9ff;
      color: #40a9ff;
    }
    &.zxd-btn-primary{
      background-color: #1890ff;border-color: #1890ff;
      color: #fff;
      &:hover,&:focus{
        background-color: #40a9ff;border-color: #40a9ff;
      }
    }
    &.zxd-btn-large{
      font-size: 16px;
      height: 40px;
      &.is-circle{
        border-radius:20px;
      }
    }
    &.zxd-btn-small{
      padding: 0 8px;
      font-size: 14px;
      height: 24px;
      &.is-circle{
        border-radius:12px;
      }
    }
    &.is-disabled, &[disabled]{
      cursor: not-allowed;
      opacity:0.3;
    }
    &.is-circle{
      border-radius:16px;
    }
  }
</style>
