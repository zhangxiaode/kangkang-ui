<template>
  <button
    :disabled="disabled"
    :type="nativeType"
    :class="[
      'kk-button',
      type ? 'kk-btn-' + type : '',
      size ? 'kk-btn-' + size : '',
      {
        'is-disabled': disabled,
        'is-ghost': ghost,
        'is-circle': circle,
        'clickShadow': clickShadow
      }
    ]"
    @click="handleClick"
  >
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'Kk-Button',
  data () {
    return {
      clickShadow: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    ghost: Boolean,
    circle: Boolean,
    showShadow: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  mounted () {
  },
  methods: {
    handleClick (evt) {
      if(!this.disabled) {
        if(this.showShadow) {
          this.clickShadow = true
          setTimeout(() => {
            this.clickShadow = false
          }, 400)
        }
        this.$emit('click', evt)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .kk-button{
    position: relative;display: inline-block;height: 32px;line-height: 1;padding: 0 15px;
    text-align: center;white-space: nowrap;font-size: 14px;color: rgba(0,0,0,.65);
    border: 1px solid #d9d9d9;border-radius: 4px;background: none;outline: none;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    box-shadow: 0 0 0 0 transparent;
    cursor: pointer;
    margin:0;
    &:hover,&:focus{
      background-color: #fff;border-color: #40a9ff;
      color: #40a9ff;
    }
    &.clickShadow{
      box-shadow: 0 0 10px 0 #40a9ff;
    }
    &.kk-btn-primary{
      background-color: #1890ff;border-color: #1890ff;
      color: #fff;
      &:hover,&:focus{
        background-color: #40a9ff;border-color: #40a9ff;
      }
    }
    &.kk-btn-dashed{
      background-color: #fff;border-color: #d9d9d9;border-style: dashed;
      color: rgba(0,0,0,.65);
      &:hover,&:focus{
        background-color: #fff;border-color: #40a9ff;
        color: #40a9ff;
      }
    }
    &.kk-btn-danger{
      background-color: #f5f5f5;border-color: #d9d9d9;
      color: #f5222d;
      &:hover,&:focus{
        background-color: #f5222d;border-color: #f5222d;
        color: #fff;
      }
      &.clickShadow{
        box-shadow: 0 0 10px 0 #f5222d;
      }
    }
    &.is-disabled, &[disabled]{
      background-color: #f5f5f5;border-color: #d9d9d9;box-shadow: none;
      color: rgba(0,0,0,.25);
      cursor: not-allowed;
      &:hover,&:focus{
        background-color:#f5f5f5;border-color: #d9d9d9;
        color: rgba(0,0,0,.25);
      }
    }
    &.is-ghost{
      background-color: transparent;border-color: #fff;
      color: #fff;
      &:hover,&:focus{
        border-color: #40a9ff;
        color: #40a9ff;
      }
      &.kk-btn-primary{
        border-color: #1890ff;
        color: #1890ff;
        &:hover,&:focus{
          background-color: transparent;border-color: #40a9ff;
          color: #40a9ff;
        }
      }
      &.kk-btn-dashed{
        &:hover,&:focus{
          background-color: transparent;
        }
      }
      &.kk-btn-danger{
        border-color: #f5222d;
        &:hover,&:focus{
          background-color: transparent;border-color: #ff4d4f;
          color: #ff4d4f;
        }
      }
      &.is-disabled{
        border-color: #d9d9d9;
        color: rgba(0,0,0,.25);
        &:hover,&:focus{
          background-color:transparent;border-color: #d9d9d9;
          color: rgba(0,0,0,.25);
        }
      }
    }
    &.is-circle{
      border-radius: 16px;
    }
    &.kk-btn-large{
      font-size: 16px;
      height: 40px;
      &.is-circle{
        border-radius: 20px;
      }
    }
    &.kk-btn-small{
      padding: 0 8px;
      font-size: 14px;
      height: 24px;
      &.is-circle{
        border-radius: 12px;
      }
    }
  }
</style>
